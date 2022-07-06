import { Meta, Story } from '@storybook/react';
import { Props } from '../src/components/atomic components/IconComponent';
import IconComponent from '../src/components/atomic components/IconComponent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UsernameIconStyled } from '../src/styled-components/icon_styled';
import SearchIcon from '@mui/icons-material/Search';

const meta: Meta = {
  title: 'Atomic Components/Icons',
  component: IconComponent,
};

export default meta;

const Template: Story<Props> = args => <IconComponent {...args} />;

export const UsernameIcon = Template.bind({});
export const ShowIcon = Template.bind({});
export const HideIcon = Template.bind({});
export const SearchMagGlassIcon = Template.bind({});

UsernameIcon.args = {
  usernameIconChar: 'A',
  usernameIconbackgroundColor: 'red',
  StyledComponentStyle: UsernameIconStyled,
};

ShowIcon.args = {
  StyledComponentStyle: VisibilityIcon,
};

HideIcon.args = {
  StyledComponentStyle: VisibilityOffIcon,
};

SearchMagGlassIcon.args = {
  StyledComponentStyle: SearchIcon,
};
