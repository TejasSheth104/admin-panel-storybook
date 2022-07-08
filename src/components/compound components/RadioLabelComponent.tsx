import React, { ReactElement } from 'react';
import Input from '../atomic components/InputComponent';
import TextComponent from '../atomic components/TextComponent';
import { RadioInputFieldStyled } from '../../styled-components/input_styled';
import { InputLabelTextStyled } from '../../styled-components/text_styled';
import { RL_options, RL_container, RL_label_text } from '../../styled-components/ccstyledcomps/RadioLabelStyledComps';


export interface Props {
  label: string;
  options: string[];
  name: string;
}

const RadioLabel = ({ label, options, name, ...props }: Props) => {
  const optionComponents: ReactElement<any, any>[] = [];

  options.forEach(option => {
    optionComponents.push(
	<RL_options>        
	<Input
          type="radio"
          name={name}
          fieldType="RadioInputField"
          StyledComponentStyle={RadioInputFieldStyled}
          radioButtonlabelText={option}
        />
      </RL_options>
);
  });

  return (
<RL_container>
	<RL_label_text>      
       	 <TextComponent
       	   children={label}
       	   StyledComponentStyle={InputLabelTextStyled}
       	 />
	</RL_label_text>
      {optionComponents}
</RL_container>
  );
};

export default RadioLabel;
