import React from 'react';
import TextComponent from '../atomic components/TextComponent';
import PageIdentifierHeaderComponent from '../compound components/PageIdentifierHeaderComponent';
import { SectionTemplateTextStyled, PDPCarousel_SwitchTextStyled } from '../../styled-components/text_styled';
import Button from '../atomic components/ButtonComponent';
import { PDPSwitchTemplateBtnStyled, SaveBtnStyled } from '../../styled-components/button_styled';
import InputLabel from '../compound components/InputLabelComponent';
import RadioLabelComponent from '../compound components/RadioLabelComponent';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PISC_container, PISC_accordion, PISC_accordion_summary, PISC_section_header_style1, PISC_section_header_style2, PISC_input_labels_container, PISC_accordion_summary_headertext, PISC_input_spacing, PISC_footer, PISC_footer_btn} from '../../styled-components/screensstyledcomponents/PageIdentifierScreenStyledComps';


export interface Props {
    username: string;
    fullHeader: boolean;
    headerText: string;
    btn_pagelist: string;
    btn_SectionTemplate: string;
    btn_save: string;
    usernameIconChar: string;
	dropDownInputOptions_1: String[];
	dropDownInputOptions_2: String[];
	dropDownInputOptions_3: String[];
	dropDownInputOptions_4: String[];
    head_title_1: string;
    subtitle_1: string;
    head_title_2: string;
    subtitle_2: string;
    head_title_3: string;
    subtitle_3: string;
    head_title_4: string;
    subtitle_4: string;
}

const PageIdentifierScreenComponent = ({
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
    head_title_1,
    subtitle_1,
    head_title_2,
    subtitle_2,
    head_title_3,
    subtitle_3,
    head_title_4,
    subtitle_4,
    btn_save,
}:Props ) => {

    return(
	<>
	<PISC_container>
            <PageIdentifierHeaderComponent 
                username={username} 
                fullHeader={fullHeader} 
                headerText={headerText} 
                btn_pagelist={btn_pagelist} 
                btn_SectionTemplate={btn_SectionTemplate} 
                usernameIconChar={usernameIconChar}
	            dropDownInputOptions_1={dropDownInputOptions_1}
                dropDownInputOptions_2={dropDownInputOptions_2}
                dropDownInputOptions_3={dropDownInputOptions_3}
                dropDownInputOptions_4={dropDownInputOptions_4}
                head_title_1={head_title_1}
                subtitle_1={subtitle_1}
                head_title_2={head_title_2}
                subtitle_2={subtitle_2}
                head_title_3={head_title_3}
                subtitle_3={subtitle_3}
                head_title_4={head_title_4}
                subtitle_4={subtitle_4}
            />

	<Accordion style={{padding:'15px', borderRadius: '25px', marginTop: '30px'}}>
	<AccordionSummary expandIcon={<ExpandMoreIcon />}>

	<PISC_section_header_style1>
		<PISC_section_header_style2>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children={head_title_1}/>
		   &nbsp; 
		    <TextComponent StyledComponentStyle={PDPCarousel_SwitchTextStyled} children={subtitle_1} />
		</PISC_section_header_style2>            
         </PISC_section_header_style1>

	</AccordionSummary>
		<PISC_accordion_summary>
		<PISC_accordion_summary_headertext>                
    			<TextComponent StyledComponentStyle={SectionTemplateTextStyled} children="Section Template: "/> 
		</PISC_accordion_summary_headertext>
		 <Button StyledComponentStyle={PDPSwitchTemplateBtnStyled} children="PDP Switch Template"/>
		</PISC_accordion_summary>
	<AccordionDetails>
	
		<PISC_input_labels_container>
        	<PISC_input_spacing>    
	
       		   <InputLabel fieldName='Label' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
		</PISC_input_spacing>

		<PISC_input_spacing>
                      <InputLabel fieldName='Name' fieldNameMuted='Character Limit 25' placeholder='Lorem Ipsum'/>
		</PISC_input_spacing>
		<PISC_input_spacing>
                      <InputLabel fieldName='forText' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
		</PISC_input_spacing>
		<PISC_input_spacing>
                      <InputLabel fieldName='url_key' fieldNameMuted='e.g.: ourlittlejoys.com/product/multivitamin-gummies' placeholder='Add text'/>
		</PISC_input_spacing>
		<PISC_input_spacing>
                      <RadioLabelComponent name="one" label="hide_price" options={['Yes', 'No']} />
		</PISC_input_spacing>
            </PISC_input_labels_container>
	</AccordionDetails>
	</Accordion>
	</PISC_container>
	
	<PISC_footer>
	<PISC_footer_btn>
		<Button StyledComponentStyle={SaveBtnStyled} children={btn_save}/>	
	</PISC_footer_btn>
	</PISC_footer>
</>
    )
}

export default PageIdentifierScreenComponent;
