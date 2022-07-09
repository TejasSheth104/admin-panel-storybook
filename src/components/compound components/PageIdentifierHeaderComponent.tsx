import React from 'react';
import TextComponent from '../atomic components/TextComponent';
import { PageIndentifierTextStyled } from '../../styled-components/text_styled';
import {
	PageListBtnStyled,
		SectionTemplateBtnStyled,
} from '../../styled-components/button_styled';
import Button from '../atomic components/ButtonComponent';
import IconComponent from '../atomic components/IconComponent';
import { UsernameIconStyled } from '../../styled-components/icon_styled';
import { UserNameTextStyled } from '../../styled-components/text_styled';
import Input from '../atomic components/InputComponent';
import { DropdownInputFieldStyled_type1 } from '../../styled-components/input_styled';
import {PIH_container, PIH_row1, PIH_row2, PIH_headerText, PIH_pageListBtn, PIH_SectionTemplateBtn, PIH_user_login_div} from '../../styled-components/ccstyledcomps/PageIdentifierHeaderStyledComps'



export interface Props {
username: string;
fullHeader: boolean;
headerText: string;
btn_pagelist: string;
btn_SectionTemplate: string;
usernameIconChar: string;
dropDownInputOptions_1: String[];
dropDownInputOptions_2: String[];
dropDownInputOptions_3: String[];
dropDownInputOptions_4: String[];
}


const PageIdentifierHeaderComponent = ({
	username, 
	fullHeader, 
	headerText, 
	btn_pagelist, 
	btn_SectionTemplate, 
	usernameIconChar,
	dropDownInputOptions_1,
	dropDownInputOptions_2,
	dropDownInputOptions_3,
	dropDownInputOptions_4,
} : Props) => {

	return (
			<PIH_container>
			{/* row1 */}
			<PIH_row1>
				<PIH_headerText>
					<TextComponent StyledComponentStyle={PageIndentifierTextStyled} children={headerText} />
				</PIH_headerText>
				
				<PIH_pageListBtn>
					<Button StyledComponentStyle={PageListBtnStyled} children={btn_pagelist}/>
				</PIH_pageListBtn>
			
				<PIH_SectionTemplateBtn>		
					<Button StyledComponentStyle={SectionTemplateBtnStyled} children={btn_SectionTemplate}/>
				</PIH_SectionTemplateBtn>
	
				<PIH_user_login_div>
					<IconComponent StyledComponentStyle={UsernameIconStyled} usernameIconChar={usernameIconChar} usernameIconbackgroundColor='#22548a'/>
					<TextComponent StyledComponentStyle={UserNameTextStyled} children={username}/>
				</PIH_user_login_div>
			</PIH_row1>
			<>
			{fullHeader ? 
			/* row2 */
				<PIH_row2>
					<Input fieldType="DropdownInputField" selectedOption="" StyledComponentStyle={DropdownInputFieldStyled_type1} dropDownInputOptionsStrings={dropDownInputOptions_1} />
					<Input fieldType="DropdownInputField" selectedOption="" StyledComponentStyle={DropdownInputFieldStyled_type1} dropDownInputOptionsStrings={dropDownInputOptions_2} />
					<Input fieldType="DropdownInputField" selectedOption="" StyledComponentStyle={DropdownInputFieldStyled_type1} dropDownInputOptionsStrings={dropDownInputOptions_3} />
					<Input fieldType="DropdownInputField" selectedOption="" StyledComponentStyle={DropdownInputFieldStyled_type1} dropDownInputOptionsStrings={dropDownInputOptions_4} />
				</PIH_row2>		
				: console.log()
			}
	</>
		</PIH_container>
		);
};

export default PageIdentifierHeaderComponent;
