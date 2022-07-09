import React from "react";
import { Meta, Story } from  '@storybook/react';
import PageListSubHeaderComponent, { Props } from '../src/components/compound components/PageListSubHeaderComponent';

const meta: Meta = {
    title: 'Compound Components/Page List SubHeader',
    component:PageListSubHeaderComponent,
};

export default meta;

const Template: Story<Props> = args => (
    <PageListSubHeaderComponent {...args}/>
);

export const PageListSubHeader = Template.bind({});
PageListSubHeader.args = {
    btn_newPage: 'New Page',
    btn_filters: 'Filters',
}