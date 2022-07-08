import React from 'react';
import Input from '../atomic components/InputComponent';
import TextComponent from '../atomic components/TextComponent';
import { TextInputFieldStyled } from '../../styled-components/input_styled';
import {
  InputLabelTextStyled,
  InputLabelMutedTextStyled,
} from '../../styled-components/text_styled';

import {IL_container, IL_label_text, IL_col2} from '../../styled-components/ccstyledcomps/InputLabelStyledComps'

export interface Props {
  fieldName: string;
  fieldNameMuted?: string;
  placeholder?: string;
}

const InputLabel = ({ fieldName, fieldNameMuted, placeholder, ...props}: Props) => {
  return (
    <>
    <IL_container>
	<IL_label_text>    
          <TextComponent StyledComponentStyle={InputLabelTextStyled} children={fieldName}/>
	</IL_label_text>
	<IL_col2>
          <Input StyledComponentStyle={TextInputFieldStyled} placeholder={placeholder}/>
          <TextComponent StyledComponentStyle={InputLabelMutedTextStyled} children={fieldNameMuted}/>
	</IL_col2>
 </IL_container>
      
    </>
  );
};

export default InputLabel;
