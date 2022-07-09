import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src/components/screens/PageListScreenComponent';
import PageListScreenComponent from '../src/components/screens/PageListScreenComponent';

const meta: Meta = {
  title: 'Screens/PageListScreen',
  component: PageListScreenComponent,
};

export default meta;

const Template: Story<Props> = args => <PageListScreenComponent {...args} />;

export const PageListScreen = Template.bind({});
PageListScreen.args = {
  username: 'Mr Sarvesh Deshwal',
  fullHeader: false,
  headerText: 'Page Identifier',
  btn_pagelist: 'Page List',
  btn_SectionTemplate: 'Section Template',
  usernameIconChar: 'A',
  btn_newPage: 'New Page',
  btn_filters: 'Filters',
  environment: 'Environment',
  brand: 'Brand',
  pageType: 'Page Type',
  pageName: 'Page Name',
  lastEdited: 'Last Edited',
  environment_col: 'Production | Staging',
  brand_col: 'ManMatters | BeBodyWise | LittleJoys',
  pageType_col: 'PDP',
  pageName_col: 'Multivitamin-gummies',
  lastEdited_col: '22/05/2022',
};
