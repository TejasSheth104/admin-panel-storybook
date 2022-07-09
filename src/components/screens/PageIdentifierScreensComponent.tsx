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
        <div style={{minHeight: '86vh', display: 'flex', flexDirection: 'column',  backgroundColor: '#F9FAFB', height:'auto',  width: '100%' }}>
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

	<Accordion style={{ padding: '15px', borderRadius: '25px', marginTop: '30px'}}>

	<AccordionSummary expandIcon={<ExpandMoreIcon />}>

            <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children={head_title_1}/>
		   &nbsp; 
		    <TextComponent StyledComponentStyle={PDPCarousel_SwitchTextStyled} children={subtitle_1} />
                </div>
            </div>
            

	</AccordionSummary>
	    <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children="Section Template: "/>
                </div>
                <Button StyledComponentStyle={PDPSwitchTemplateBtnStyled} children="PDP Switch Template"/>
            </div>

	<AccordionDetails>

            <div id="input-labels-container" style={{marginTop:'2vh', width:'98%'}}>
                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Label' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Name' fieldNameMuted='Character Limit 25' placeholder='Lorem Ipsum'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='forText' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='url_key' fieldNameMuted='e.g.: ourlittlejoys.com/product/multivitamin-gummies' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <RadioLabelComponent name="one" label="hide_price" options={['Yes', 'No']} />
                </div>
            
            </div>
	</AccordionDetails>

	</Accordion>

	
	<Accordion style={{ padding: '15px', borderRadius: '25px', marginTop: '30px'}}>

	<AccordionSummary expandIcon={<ExpandMoreIcon />}>

            <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children={head_title_2}/>
		   &nbsp; 
		    <TextComponent StyledComponentStyle={PDPCarousel_SwitchTextStyled} children={subtitle_2} />
                </div>
            </div>
            

	</AccordionSummary>
	    <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children="Section Template"/>
                </div>
                <Button StyledComponentStyle={PDPSwitchTemplateBtnStyled} children="PDP Switch Template"/>
            </div>

	<AccordionDetails>

            <div id="input-labels-container" style={{marginTop:'2vh', width:'98%'}}>
                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Label' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Name' fieldNameMuted='Character Limit 25' placeholder='Lorem Ipsum'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='forText' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='url_key' fieldNameMuted='e.g.: ourlittlejoys.com/product/multivitamin-gummies' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <RadioLabelComponent label="hide_price" options={['Yes', 'No']} name='two' />
                </div>
            
            </div>
	</AccordionDetails>

	</Accordion>

	<Accordion style={{ padding: '15px', borderRadius: '25px', marginTop: '30px'}}>

	<AccordionSummary expandIcon={<ExpandMoreIcon />}>

            <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children={head_title_3}/>
		   &nbsp; 
		    <TextComponent StyledComponentStyle={PDPCarousel_SwitchTextStyled} children={subtitle_3} />
                </div>
            </div>
            

	</AccordionSummary>
	    <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children="Section Template"/>
                </div>
                <Button StyledComponentStyle={PDPSwitchTemplateBtnStyled} children="PDP Switch Template"/>
            </div>

	<AccordionDetails>

            <div id="input-labels-container" style={{marginTop:'2vh', width:'98%'}}>
                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Label' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Name' fieldNameMuted='Character Limit 25' placeholder='Lorem Ipsum'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='forText' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='url_key' fieldNameMuted='e.g.: ourlittlejoys.com/product/multivitamin-gummies' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <RadioLabelComponent label="hide_price" options={['Yes', 'No']} name='three' />
                </div>
            
            </div>
	</AccordionDetails>
	</Accordion>



	<Accordion style={{ padding: '15px', borderRadius: '25px', marginTop: '30px'}}>

	<AccordionSummary expandIcon={<ExpandMoreIcon />}>

            <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children={head_title_4}/>
		   &nbsp; 
		    <TextComponent StyledComponentStyle={PDPCarousel_SwitchTextStyled} children={subtitle_4} />
                </div>
            </div>
            

	</AccordionSummary>
	    <div style={{display: 'flex', flexDirection:'row', borderRadius: '10px', backgroundColor: 'white', height: 'auto',  marginTop: '20px' }}>
                <div style={{display: 'flex', alignItems:'center', marginRight:'3vw'}}>
                    <TextComponent StyledComponentStyle={SectionTemplateTextStyled} children="Section Template"/>
                </div>
                <Button StyledComponentStyle={PDPSwitchTemplateBtnStyled} children="PDP Switch Template"/>
            </div>

	<AccordionDetails>

            <div id="input-labels-container" style={{marginTop:'2vh', width:'98%'}}>
                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Label' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='Name' fieldNameMuted='Character Limit 25' placeholder='Lorem Ipsum'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='forText' fieldNameMuted='Character Limit 25' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <InputLabel fieldName='url_key' fieldNameMuted='e.g.: ourlittlejoys.com/product/multivitamin-gummies' placeholder='Add text'/>
                </div>

                <div style={{marginTop: '15px'}}>
                    <RadioLabelComponent label="hide_price" options={['Yes', 'No']} name='four' />
                </div>
            
            </div>
	</AccordionDetails>
	</Accordion>


        </div>

	<footer style={{display:'flex', justifyContent:'center'}}>
	<div style={{  justifyContent:'center', bottom: '0px',  width: '97%', paddingTop: '20px', paddingBottom: '20px', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}>
		<Button StyledComponentStyle={SaveBtnStyled} children={btn_save}/>	
	</div>
	</footer>
	
</>
    )
}

export default PageIdentifierScreenComponent;
