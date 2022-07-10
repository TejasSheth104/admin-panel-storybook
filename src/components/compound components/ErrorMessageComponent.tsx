import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import TextComponent from '../atomic components/TextComponent';
import {
  PDPCarousel_SwitchTextStyled,
  SectionTemplateTextStyled,
  InputLabelTextStyled,
  ErrorReasonText,
} from '../../styled-components/text_styled';
export interface Props {
  error: string;
  message: string;
}

import {EM_container, EM_icon_exclamation, EM_error_text_div, EM_reason_text_div, EM_icon_close} from '../../styled-components/ccstyledcomps/ErrorMessageStyledComps';

const ErrorMessageComponent = ({
  error, message
}: Props) => {
  return (
      
	<EM_container>
		<div style={{display:'flex', flexDirection: 'row'}}>
		<EM_icon_exclamation>        
			<ErrorOutlineOutlinedIcon />
	 	</EM_icon_exclamation>     
		<EM_error_text_div>
	        	<TextComponent
	          	children={error}
	          	StyledComponentStyle={PDPCarousel_SwitchTextStyled}
	        	/>
      		</EM_error_text_div>
		<EM_icon_close>
        		<CloseIcon />
		</EM_icon_close>
		</div>
		<EM_reason_text_div>
	          <TextComponent children={message} StyledComponentStyle={ErrorReasonText}/>
		</EM_reason_text_div>
	</EM_container>
 );
};

export default ErrorMessageComponent;
