import React from "react";
import { NewPageBtnStyled, FiltersBtnStyled } from "../../styled-components/button_styled";
import Button from "../atomic components/ButtonComponent";
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchBarComponent from "./SearchBarComponent";
import {PLSC_container, PLSC_NewPageBtn, PLSC_FilterBtn} from '../../styled-components/ccstyledcomps/PageListSubHeaderStyledComps'


export interface Props {
    btn_newPage: string;
    btn_filters: string;
};

const PageListSubheaderComponent = ({
    btn_newPage,
    btn_filters,
} : Props ) => {
    return (
	<PLSC_container>    
		<PLSC_NewPageBtn>            
   			<Button StyledComponentStyle={NewPageBtnStyled} children={btn_newPage} Icon={AddIcon} alignIcon='right'/>
 		</PLSC_NewPageBtn>           

		<PLSC_FilterBtn> 
               		<Button StyledComponentStyle={FiltersBtnStyled} children={btn_filters} Icon={FilterListIcon} alignIcon='right'/>
		</PLSC_FilterBtn>
		<SearchBarComponent />   
	</PLSC_container>
 );
};

export default PageListSubheaderComponent;
