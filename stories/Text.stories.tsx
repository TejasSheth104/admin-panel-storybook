import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextComponent, {
  Props,
} from '../src/components/atomic components/TextComponent';
import {
  PageIndentifierTextStyled,
  UserNameTextStyled,
  InputLabelTextStyled,
  InputLabelMutedTextStyled,
  PDPCarousel_SwitchTextStyled,
  SectionTemplateTextStyled,
} from '../src/styled-components/text_styled';

const meta: Meta = {
  title: 'Atomic Components/Text',
  component: TextComponent,
  argTypes: {
    children: {
      defaultValue: 'Default Value',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <TextComponent {...args} />;

export const PageIndentifierText = Template.bind({});
export const UserNameText = Template.bind({});
export const InputLabelText = Template.bind({});
export const InputLabelMutedText = Template.bind({});
export const PDPCarousel_SwitchText = Template.bind({});
export const SectionTemplateText = Template.bind({});

PageIndentifierText.args = {
  children: 'Page Identifier',
  StyledComponentStyle: PageIndentifierTextStyled,
};

UserNameText.args = {
  children: 'Mr. Suresh Deshwal',
  StyledComponentStyle: UserNameTextStyled,
};

InputLabelText.args = {
  children: 'Label Name',
  StyledComponentStyle: InputLabelTextStyled,
};

InputLabelMutedText.args = {
  children: 'Label Name',
  StyledComponentStyle: InputLabelMutedTextStyled,
};

PDPCarousel_SwitchText.args = {
  children: 'PDP Carousel Widget',
  StyledComponentStyle: PDPCarousel_SwitchTextStyled,
};

SectionTemplateText.args = {
  children: 'Section Template',
  StyledComponentStyle: SectionTemplateTextStyled,
};
