import React from 'react';
import { Story, Meta } from '@storybook/react';
import CreateNewSectionModal from '../src/components/compound components/CreateNewSectionModalComponent';
import { Props } from '../src/components/compound components/CreateNewSectionModalComponent';

const meta: Meta = {
  title: 'Compound Components/Create New Section Modal',
  component: CreateNewSectionModal,
};

export default meta;

const Template: Story<Props> = args => <CreateNewSectionModal {...args} />;

export const CreateNewSectionModall = Template.bind({});
CreateNewSectionModall.args = {
  heading: 'Create New Section',
  sectionName: 'Section Name',
  placeholder: 'Click to start Typing',
  close: 'Close',
  createSection: 'Create Section'
};
