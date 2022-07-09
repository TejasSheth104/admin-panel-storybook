import React from 'react';
import { Meta, Story } from '@storybook/react';
import PageIdentifierHeaderComponent from '../src/components/compound components/PageIdentifierHeaderComponent';
import { Props } from '../src/components/compound components/PageIdentifierHeaderComponent';
const meta: Meta = {
  title: 'Compound Components/Page Identifier Header',
  component: PageIdentifierHeaderComponent,
};

export default meta;

const Template: Story<Props> = args => (
  <PageIdentifierHeaderComponent {...args} />
);

export const PageIdentifierHeader = Template.bind({});
PageIdentifierHeader.args = {
  username: 'Mr Sarvesh Deshwal',
  fullHeader: false,
  headerText: 'Page Identifier',
  btn_pagelist: 'Page List',
  btn_SectionTemplate: 'Section Template',
  usernameIconChar: 'A',
  dropDownInputOptions_1: [
    'option 1',
    'option 1',
    'option 1',
    'option 1',
    'option 1',
  ],
  dropDownInputOptions_2: [
    'option 2',
    'option 2',
    'option 2',
    'option 2',
    'option 2',
  ],
  dropDownInputOptions_3: [
    'option 3',
    'option 3',
    'option 3',
    'option 3',
    'option 3',
  ],
  dropDownInputOptions_4: [
    'option 4',
    'option 4',
    'option 4',
    'option 4',
    'option 4',
  ],
};
