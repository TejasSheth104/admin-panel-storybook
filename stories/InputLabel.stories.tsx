import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Props } from '../src/components/atomic components/InputComponent';
import InputLabel from '../src/components/compound components/InputLabelComponent';

const meta: Meta = {
  title: 'Compound Components/Input Label',
  component: InputLabel,
};

export default meta;

const Template: Story<Props> = args => (
  <InputLabel fieldName={''} fieldNameMuted={''} {...args} />
);

export const InputLabell = Template.bind({});
InputLabell.args = {
  fieldName: 'Label',
  fieldNameMuted: 'Character Limit 25',
  placeholder: 'Add Text',
};
