import React, { FC } from 'react';
import { ReactNode } from 'react';
import { StyledComponent } from 'styled-components';

export interface Props {
  children: ReactNode;
  // variant: 'PDPSwitchTemplate' | 'PageList' | 'SectionTemplate' | 'Save' | 'Close' | 'NewPage' | 'SelectTemplate' | 'Filters' | 'AddNewSection' | 'UserDropDownIcon' ;
  StyledComponentStyle: StyledComponent<'button', any, {}, never>;
  Icon?: FC<{}>;
  alignIcon?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  StyledComponentStyle,
  Icon,
  alignIcon,
  onClick,
  ...props
}: Props) => {
  return alignIcon === undefined ? (
    <div>
      <StyledComponentStyle onClick={onClick}>{children}</StyledComponentStyle>{' '}
    </div>
  ) : (
    <div>
      {alignIcon === 'left' ? (
        <StyledComponentStyle onClick={onClick}>
          <Icon />
          <div style={{ padding: '5px' }}> {children}</div>
        </StyledComponentStyle>
      ) : (
        <StyledComponentStyle onClick={onClick}>
          <div style={{ padding: '5px' }}> {children}</div>
          <Icon />
        </StyledComponentStyle>
      )}{' '}
    </div>
  );
};

export default Button;
