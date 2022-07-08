import React from 'react';
import { Meta, Story } from '@storybook/react';
import ErrorMessageComponent from '../src/components/compound components/ErrorMessageComponent';
import { Props } from '../src/components/compound components/ErrorMessageComponent';
const meta: Meta = {
  title: 'Compound Components/Error Message',
  component: ErrorMessageComponent,
};

export default meta;

const Template: Story<Props> = args => (
  <ErrorMessageComponent {...args} />
);

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  error: 'Error',
  message: 'No results found according to your search. Please try again.',
};
