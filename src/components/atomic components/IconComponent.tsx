import React from 'react';
import { StyledComponent } from 'styled-components';

export interface Props {
  usernameIconChar?: string;
  usernameIconbackgroundColor?: string;
  StyledComponentStyle:
    | StyledComponent<'div', any, {}, never>
    | StyledComponent<'div', any, { backgroundColor?: string }, never>;
}

const IconComponent = ({
  usernameIconChar,
  usernameIconbackgroundColor,
  StyledComponentStyle,
  ...props
}: Props) => {
  return usernameIconChar != undefined ? (
    <StyledComponentStyle backgroundColor={usernameIconbackgroundColor}>
      {usernameIconChar}
    </StyledComponentStyle>
  ) : (
    <StyledComponentStyle onClick={() => alert('Icon Clicked')} />
  );
};

export default IconComponent;
