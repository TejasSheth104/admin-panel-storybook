import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Props } from '../src/components/screens/PageIdentifierScreensComponent';
import PageIdentifierScreenComponent from '../src/components/screens/PageIdentifierScreensComponent';

const meta: Meta = {
  title: 'Screens/PageIdentifierScreen',
  component: PageIdentifierScreenComponent,
};

export default meta;

const Template: Story<Props> = args => (
  <PageIdentifierScreenComponent {...args} />
);

export const PageIdentifierScreen = Template.bind({});
PageIdentifierScreen.args = {
  username: 'Mr Sarvesh Deshwal',
  fullHeader: true,
  headerText: 'Page Identifier',
  btn_pagelist: 'Page List',
  btn_SectionTemplate: 'Section Template',
  btn_save: 'Save',
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
  head_title_1: 'Section Name 1: ',
  subtitle_1: 'PDP Switch 1',
  head_title_2: 'Section Name 2: ',
  subtitle_2: 'PDP Switch 2',
  head_title_3: 'Section Name 3: ',
  subtitle_3: 'PDP Switch 3',
  head_title_4: 'Section Name 4: ',
  subtitle_4: 'PDP Switch 4',
};
