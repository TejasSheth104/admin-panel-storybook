import React, { useState } from 'react';
import Modal from 'react-modal';
import Input from '../atomic components/InputComponent';
import Button from '../atomic components/ButtonComponent';
import {
  TextInputFieldStyled,
  DropdownInputFieldStyled_type2,
} from '../../styled-components/input_styled';
import {
  CloseBtnStyled,
  SaveBtnStyled,
} from '../../styled-components/button_styled';
import {FM_container, FM_headerText, FM_label1, FM_label2, FM_label3, FM_reset_btn, FM_applyFilters_btn, FM_btn_container} from '../../styled-components/ccstyledcomps/FilterModalStyledComps'

export interface Props {
  heading: string;
  placeholder: string;
  brands: string;
  environment: string;
  dropDownInputOptions_1: String[];
  dropDownInputOptions_2: Stirng[];
  reset: string;
  applyFilters: string;
}

const FilterModal = ({ heading, placeholder, brands, environment, dropDownInputOptions_1, dropDownInputOptions_2, reset, applyFilters, ...props }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>
        onClick Filter Button
      </button>
      <Modal
	id="FM_container"
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
          
	<FM_container>
{/* <div style={{fontSize: '30px', border: '1px solid blue'}}>{heading}</div>
            <div style={{fontSize: '20px', border: '1px solid blue'}}>Page Type</div> */}
	<FM_headerText>           
 		{heading}
	</FM_headerText>
	<FM_label1>            
		{heading}
	</FM_label1>
          <Input
            type="text"
            name="filter"
            placeholder={placeholder}
            StyledComponentStyle={TextInputFieldStyled}
          ></Input>

	<FM_label2>
            {brands}
	</FM_label2>
          <Input
            StyledComponentStyle={DropdownInputFieldStyled_type2}
            dropDownInputOptionsStrings={dropDownInputOptions_1}
            selectedOption=""
            fieldType="DropdownInputField"
          ></Input>

	<FM_label3>
            {environment}
          
	</FM_label3>
	<Input
            StyledComponentStyle={DropdownInputFieldStyled_type2}
            dropDownInputOptionsStrings={dropDownInputOptions_2}
            selectedOption=""
            fieldType="DropdownInputField"
          ></Input>

	<FM_btn_container>

	<FM_reset_btn>
              <Button
                StyledComponentStyle={CloseBtnStyled}
                children={reset}
              ></Button>
	</FM_reset_btn>

	<FM_applyFilters_btn>          
	    <Button
                StyledComponentStyle={SaveBtnStyled}
                children={applyFilters}
              ></Button>
	</FM_applyFilters_btn>
        
	
        </FM_btn_container>
      
	</FM_container>	
</Modal>
    </>
  );
};

export default FilterModal;
