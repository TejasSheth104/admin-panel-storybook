import React, { useState } from 'react';
import Modal from 'react-modal';
import Input from '../atomic components/InputComponent';
import Button from '../atomic components/ButtonComponent';

import {
  CloseBtnStyled,
  SaveBtnStyled,
} from '../../styled-components/button_styled';
import { TextInputFieldStyled } from '../../styled-components/input_styled';
import {CNSM_container, CNSM_btn_container, CNSM_close_btn, CNSM_create_section_btn, CNSM_headerText, CNSM_label_text} from '../../styled-components/ccstyledcomps/CreateNewSectionModalStyledComps';

export interface Props {
  heading: string;
  sectionName: string;
  placeholder: string;
  close: string;
  createSection: string;
}

const CreateNewSectionModal = ({ heading, sectionName, placeholder, close, createSection, ...Props }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>
        onClick Add New Section Button
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseonOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            // backgroundColor: 'red',
          },
          content: {
            width: 'max-content',
            height: 'max-content',
            borderRadius: '30px',
            backgroundColor: 'white',
            padding: '0px',
          },
        }}
      >

<CNSM_container>
<CNSM_headerText>
            {heading}
</CNSM_headerText>
          
	<CNSM_label_text>	
  		{sectionName}
       </CNSM_label_text>

   <Input
            type="text"
            name="filter"
            placeholder={placeholder}
            StyledComponentStyle={TextInputFieldStyled}
          ></Input>
	
	<CNSM_btn_container>
	<CNSM_close_btn>

              <Button
                StyledComponentStyle={CloseBtnStyled}
                children={close}
              ></Button>
           
          </CNSM_close_btn>

	<CNSM_create_section_btn>
              <Button
                StyledComponentStyle={SaveBtnStyled}
                children={createSection}
              ></Button>
         </CNSM_create_section_btn>

 	</CNSM_btn_container>
        </CNSM_container>
 </Modal>
    </>
  );
};

export default CreateNewSectionModal;
