import React from 'react';
import Input from '../atomic components/InputComponent';
import { SearchFieldStyled } from '../../styled-components/input_styled';

export interface Props {
}

const SearchBar = ({...props }: Props) => {
  return (
        <Input
              type="text"
              fieldType="SearchField" 
              StyledComponentStyle={SearchFieldStyled}
        ></Input>
  )
};

export default SearchBar;

