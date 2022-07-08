import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Props } from '../src/components/compound components/RadioLabelComponent';
import RadioLabel from '../src/components/compound components/RadioLabelComponent';

const meta: Meta = {
  title: 'Compound Components/ Radio Label',
  component: RadioLabel,
};

export default meta;

const Template: Story<Props> = args => <RadioLabel {...args} />;

export const RadioLabell = Template.bind({});
RadioLabell.args = {
  label: 'label',
  name: 'name',
  options: ['yes', 'no'],
};
