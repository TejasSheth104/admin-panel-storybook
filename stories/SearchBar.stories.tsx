import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src/components/compound components/SearchBarComponent';
import SearchBar from '../src/components/compound components/SearchBarComponent';

const meta: Meta = {
  title: 'Compound Components/ Search Bar',
  component: SearchBar,
};

export default meta;

const Template: Story<Props> = args => <SearchBar {...args} />;

export const SearchBarr = Template.bind({});
SearchBarr.args = {};
