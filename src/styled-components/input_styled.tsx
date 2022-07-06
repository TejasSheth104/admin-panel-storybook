import styled from 'styled-components';

export const TextInputFieldStyled = styled.input`
  background: #f6f6f6;
  opacity: 0.7;
  border-radius: 12px;
  width: 450px;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: black;
  opacity: 0.8;
  border: 0px;
  margin-left: 15px;
`;

export const SearchFieldStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background: #ffffff;
  font-style: normal;
  font-size: 20px;
  width: 100%;
  font-weight: 400;
  line-height: 1.25;
  padding: 2px 6px !important;
  border-radius: 12px !important;
  height: 40px;
`;

export const SearchInputFieldStyled = styled.input`
  outline: 0;
  border: 0;
  height: 100%;
  width: 90%;
`;

export const RadioInputFieldStyled = styled.input`
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 1;
  width: 80px;
  margin: 0;
  margin-right: 5px;
  width: 16px;
`;
export const DropdownInputFieldStyled_type1 = styled.select`
  border: 1px solid rgba(3, 3, 3, 0.1);
  background: #ffffff;
  border-radius: 7px;
  font-family: 'SofiaPro';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  padding-right: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 7px;
  margin-right: 20px;
  color: rgba(3, 3, 3, 0.8);
`;

export const DropdownInputFieldStyled_type2 = styled.select`
  background: rgba(34, 84, 138, 0.05);
  border: 0;
  border-radius: 10px;
  font-family: 'SofiaPro';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  color: #22548a;
  width: 100%;
  max-width: 190px;
  padding: 13px;
  margin-left: 15px;
  margin-top: 5px;
`;
