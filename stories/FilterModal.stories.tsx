import React from 'react';
import { Story, Meta } from '@storybook/react';
import FilterModal from '../src/components/compound components/FilterModalComponent';
import { Props } from '../src/components/compound components/FilterModalComponent';

const meta: Meta = {
  title: 'Compound Components/Filter Modal',
  component: FilterModal,
};

export default meta;

const Template: Story<Props> = args => <FilterModal {...args} />;

export const FilterModall = Template.bind({});
FilterModall.args = {
  heading: 'Filters',
  placeholder: 'Add text',
  brands: 'Brands',
  environment: 'Environment',
  dropDownInputOptions_1: [
    'option',
    'option',
    'option',
    'option',
    'option',
  ],
  dropDownInputOptions_2: [
    'option',
    'option',
    'option',
    'option',
    'option',
  ],
  reset: 'Reset',
  applyFilters: 'Apply Filters',
};
