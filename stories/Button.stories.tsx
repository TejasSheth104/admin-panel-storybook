import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonComponent, {
  Props,
} from '../src/components/atomic components/ButtonComponent';
import {
  PageListBtnStyled,
  SectionTemplateBtnStyled,
  PDPSwitchTemplateBtnStyled,
  SaveBtnStyled,
  CloseBtnStyled,
  SelectTemplateBtnStyled,
  NewPageBtnStyled,
  FiltersBtnStyled,
  AddNewSectionBtnStyled,
  UploadImageBtnStyled,
  TableHeadBtnStyled,
} from '../src/styled-components/button_styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

const meta: Meta = {
  title: 'Atomic Components/Button',
  component: ButtonComponent,
  argTypes: {
    children: {
      defaultValue: 'Default Value',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <ButtonComponent {...args} />;

export const PageListBtn = Template.bind({});
export const SectionTemplateBtn = Template.bind({});
export const PDPSwitchTemplateBtn = Template.bind({});
export const SaveBtn = Template.bind({});
export const CloseBtn = Template.bind({});
export const SelectTemplateBtn = Template.bind({});
export const NewPageBtn = Template.bind({});
export const FiltersBtn = Template.bind({});
export const AddNewSectionBtn = Template.bind({});
export const UserDropDownIconBtn = Template.bind({});
export const UploadImageBtn = Template.bind({});
export const TableHeadBtn = Template.bind({});

PageListBtn.args = {
  children: 'PageList',
  StyledComponentStyle: PageListBtnStyled,
  onClick: () => {
    alert('PageList Button clicked');
  },
};

SectionTemplateBtn.args = {
  children: 'Section Template List',
  StyledComponentStyle: SectionTemplateBtnStyled,
  onClick: () => {
    alert('Section template Button clicked');
  },
};

PDPSwitchTemplateBtn.args = {
  children: 'PDP Switch Template',
  StyledComponentStyle: PDPSwitchTemplateBtnStyled,
  onClick: () => {
    alert('PDP switch template Button clicked');
  },
};

SaveBtn.args = {
  children: 'Save',
  StyledComponentStyle: SaveBtnStyled,
  onClick: () => {
    alert('Save Button clicked');
  },
};

CloseBtn.args = {
  children: 'Close',
  StyledComponentStyle: CloseBtnStyled,
  onClick: () => {
    alert('Close Button clicked');
  },
};

SelectTemplateBtn.args = {
  children: 'Select Template',
  StyledComponentStyle: SelectTemplateBtnStyled,
  onClick: () => {
    alert('Section Template Button clicked');
  },
};

NewPageBtn.args = {
  children: 'New Page',
  StyledComponentStyle: NewPageBtnStyled,
  Icon: AddIcon,
  alignIcon: 'right',
  onClick: () => {
    alert('New page Button clicked');
  },
};

FiltersBtn.args = {
  children: 'Filters',
  StyledComponentStyle: FiltersBtnStyled,
  Icon: FilterListIcon,
  alignIcon: 'right',
  onClick: () => {
    alert('Filters Button clicked');
  },
};

AddNewSectionBtn.args = {
  children: 'Add New Section',
  StyledComponentStyle: AddNewSectionBtnStyled,
  Icon: AddCircleOutlineIcon,
  alignIcon: 'left',
  onClick: () => {
    alert('Add new section Button clicked');
  },
};

UserDropDownIconBtn.args = {
  StyledComponentStyle: ArrowDropDownIcon,
  onClick: () => {
    alert('User dropdown Button clicked');
  },
};

UploadImageBtn.args = {
  children: 'Upload Image',
  StyledComponentStyle: UploadImageBtnStyled,
  onClick: () => {
    alert('Upload Image Button clicked');
  },
};

TableHeadBtn.args = {
  children: 'Table Heading',
  StyledComponentStyle: TableHeadBtnStyled,
  Icon: FilterListIcon,
  alignIcon: 'right',
  onClick: () => {
    alert('Table Head Button clicked');
  },
};
