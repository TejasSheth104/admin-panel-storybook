import React from 'react';
import { ReactNode } from 'react';
import { StyledComponent } from 'styled-components';

export interface Props {
  children: ReactNode;
  StyledComponentStyle: StyledComponent<'div', any, {}, never>;
}

const TextComponent = ({ children, StyledComponentStyle, ...props }: Props) => {
  return <StyledComponentStyle>{children}</StyledComponentStyle>;
};

export default TextComponent;
