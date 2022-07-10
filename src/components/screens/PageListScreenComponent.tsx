import React from "react";
import { TableHeadBtnStyled } from "../../styled-components/button_styled";
import Button from "../atomic components/ButtonComponent";
import PageIdentifierHeaderComponent from "../compound components/PageIdentifierHeaderComponent";
import PageListSubheaderComponent from "../compound components/PageListSubHeaderComponent";
// import TableHeadingComponent from "../compound components/TableHeadingComponent";
import FilterListIcon from '@mui/icons-material/FilterList';
import { PLS_container, PLS_table_container, PLS_table_div, PLS_table, PLS_subheader, PLS_th, PLS_td } from "../../styled-components/screensstyledcomponents/PageListScreenStyledComps";

export interface Props {
    username: string;
    fullHeader: boolean;
    headerText: string;
    btn_pagelist: string;
    btn_SectionTemplate: string;
    usernameIconChar: string;
    btn_newPage: string;
    btn_filters: string;
    environment: string;
    brand: string;
    pageType: string;
    pageName: string;
    lastEdited: string;
    environment_col: string;
    brand_col: string;
    pageType_col: string;
    pageName_col: string;
    lastEdited_col: string;
}

const PageListScreenComponent = ({
    username, 
    fullHeader, 
    headerText, 
    btn_pagelist, 
    btn_SectionTemplate,
    usernameIconChar,
    btn_newPage,
    btn_filters,
    environment,
    brand,
    pageType,
    pageName,
    lastEdited,
    environment_col,
    brand_col,
    pageType_col,
    pageName_col,
    lastEdited_col,
}:Props ) => {
    return (
		<PLS_container>
            <PageIdentifierHeaderComponent 
                username={username}
                fullHeader={fullHeader}
                headerText={headerText}
                btn_pagelist={btn_pagelist}
                btn_SectionTemplate={btn_SectionTemplate}
                usernameIconChar={usernameIconChar} 
                environment_col={environment_col}
                brand_col={brand_col}
                pageType_col={pageType_col}
                pageName_col={pageName_col}
                lastEdited_col={lastEdited_col}
            />
		<PLS_table_container>
		<PLS_subheader>
                    <PageListSubheaderComponent btn_newPage={btn_newPage} btn_filters={btn_filters} />
		</PLS_subheader>
		<PLS_table_div>
		<PLS_table>	                   
		 <tr>
                    <PLS_th><Button StyledComponentStyle={TableHeadBtnStyled} children={environment} Icon={FilterListIcon} alignIcon="right" /></PLS_th>
                    <PLS_th><Button StyledComponentStyle={TableHeadBtnStyled} children={brand} Icon={FilterListIcon} alignIcon="right" /></PLS_th>
                    <PLS_th><Button StyledComponentStyle={TableHeadBtnStyled} children={pageType} Icon={FilterListIcon} alignIcon="right" /></PLS_th>
                    <PLS_th><Button StyledComponentStyle={TableHeadBtnStyled} children={pageName} Icon={FilterListIcon} alignIcon="right" /></PLS_th>
                    <PLS_th><Button StyledComponentStyle={TableHeadBtnStyled} children={lastEdited} Icon={FilterListIcon} alignIcon="right" /></PLS_th>
                    </tr>
                    <tr>
                        <PLS_td >{environment_col}</PLS_td>
                        <PLS_td >{brand_col}</PLS_td>
                        <PLS_td >{pageType_col}</PLS_td>
                        <PLS_td >{pageName_col}</PLS_td>
                        <PLS_td >{lastEdited_col}</PLS_td>
                    </tr>
                    <tr>
                        <PLS_td >{environment_col}</PLS_td>
                        <PLS_td >{brand_col}</PLS_td>
                        <PLS_td >{pageType_col}</PLS_td>
                        <PLS_td >{pageName_col}</PLS_td>
                        <PLS_td >{lastEdited_col}</PLS_td>
                    </tr>
                    <tr>
                        <PLS_td >{environment_col}</PLS_td>
                        <PLS_td >{brand_col}</PLS_td>
                        <PLS_td >{pageType_col}</PLS_td>
                        <PLS_td >{pageName_col}</PLS_td>
                        <PLS_td >{lastEdited_col}</PLS_td>
                    </tr>
                    <tr>
                        <PLS_td ></PLS_td>
                        <PLS_td ></PLS_td>
                        <PLS_td ></PLS_td>
                        <PLS_td ></PLS_td>
                        <PLS_td ></PLS_td>
                    </tr>
		</PLS_table>
		</PLS_table_div>
		</PLS_table_container>	
		</PLS_container>
    );
};

export default PageListScreenComponent;
