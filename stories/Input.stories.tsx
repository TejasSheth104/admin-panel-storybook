import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputComponent, {
  Props,
} from '../src/components/atomic components/InputComponent';
import {
  TextInputFieldStyled,
  RadioInputFieldStyled,
  DropdownInputFieldStyled_type1,
  DropdownInputFieldStyled_type2,
  SearchFieldStyled,
} from '../src/styled-components/input_styled';

const meta: Meta = {
  title: 'Atomic Components/Input',
  component: InputComponent,
  argTypes: {
    children: {
      defaultValue: 'Default Value',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <InputComponent {...args} />;

export const TextInputField = Template.bind({});
export const RadioInputField = Template.bind({});
export const DropdownInputField_type1 = Template.bind({});
export const DropdownInputField_type2 = Template.bind({});
export const SearchField = Template.bind({});

TextInputField.args = {
  StyledComponentStyle: TextInputFieldStyled,
  type: 'text',
  name: 'name',
  placeholder: 'Add Text',
};

DropdownInputField_type1.args = {
  StyledComponentStyle: DropdownInputFieldStyled_type1,
  fieldType: 'DropdownInputField',
  dropDownInputOptionsStrings: [
    'option 1',
    'option 1',
    'option 1',
    'option 1',
    'option 1',
  ], // modify this array to reflect dropdown options
};

DropdownInputField_type2.args = {
  StyledComponentStyle: DropdownInputFieldStyled_type2,
  fieldType: 'DropdownInputField',
  dropDownInputOptionsStrings: [
    'option 1',
    'option 1',
    'option 1',
    'option 1',
    'option 1',
  ], // modify this array to reflect dropdown options
};

RadioInputField.args = {
  StyledComponentStyle: RadioInputFieldStyled,
  type: 'radio',
  name: 'name',
  fieldType: 'RadioInputField',
  radioButtonlabelText: '',
};

SearchField.args = {
  StyledComponentStyle: SearchFieldStyled,
  type: 'text',
  name: 'search-bar',
  fieldType: 'SearchField',
};
