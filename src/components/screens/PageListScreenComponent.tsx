import React from "react";
import { TableHeadBtnStyled } from "../../styled-components/button_styled";
import Button from "../atomic components/ButtonComponent";
import PageIdentifierHeaderComponent from "../compound components/PageIdentifierHeaderComponent";
import PageListSubheaderComponent from "../compound components/PageListSubHeaderComponent";
// import TableHeadingComponent from "../compound components/TableHeadingComponent";
import FilterListIcon from '@mui/icons-material/FilterList';

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
        <div style={{display: 'flex', flexDirection: 'column',  backgroundColor: '#F9FAFB', height:'auto', width: '100%'}}>
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
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', width: '96%', alignItems: 'center', marginTop: '30px'}}>
                    <PageListSubheaderComponent btn_newPage={btn_newPage} btn_filters={btn_filters} />
                </div>
                <div style={{width: '96%', marginTop: '30px', display: 'flex'}}>
                <table  style={{width: '100%', border: '1px solid', borderRadius: '3px'}}>
                    <tr>
                    <th style={{width: '20%'}}><Button StyledComponentStyle={TableHeadBtnStyled} children={environment} Icon={FilterListIcon} alignIcon="right" /></th>
                    <th style={{width: '20%'}}><Button StyledComponentStyle={TableHeadBtnStyled} children={brand} Icon={FilterListIcon} alignIcon="right" /></th>
                    <th style={{width: '20%'}}><Button StyledComponentStyle={TableHeadBtnStyled} children={pageType} Icon={FilterListIcon} alignIcon="right" /></th>
                    <th style={{width: '20%'}}><Button StyledComponentStyle={TableHeadBtnStyled} children={pageName} Icon={FilterListIcon} alignIcon="right" /></th>
                    <th style={{width: '20%'}}><Button StyledComponentStyle={TableHeadBtnStyled} children={lastEdited} Icon={FilterListIcon} alignIcon="right" /></th>
                    </tr>
                    <tr>
                        <td style={{padding: '20px', border: '1px solid'}}>{environment_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{brand_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{pageType_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{pageName_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{lastEdited_col}</td>
                    </tr>
                    <tr>
                        <td style={{padding: '20px', border: '1px solid'}}>{environment_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{brand_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{pageType_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{pageName_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{lastEdited_col}</td>
                    </tr>
                    <tr>
                        <td style={{padding: '20px', border: '1px solid'}}>{environment_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{brand_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{pageType_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{pageName_col}</td>
                        <td style={{padding: '20px', border: '1px solid'}}>{lastEdited_col}</td>
                    </tr>
                    <tr>
                        <td style={{padding: '20px', border: '1px solid'}}></td>
                        <td style={{padding: '20px', border: '1px solid'}}></td>
                        <td style={{padding: '20px', border: '1px solid'}}></td>
                        <td style={{padding: '20px', border: '1px solid'}}></td>
                        <td style={{padding: '20px', border: '1px solid'}}></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
};

export default PageListScreenComponent;
