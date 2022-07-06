import React, { FC, ReactElement } from 'react';
import { StyledComponent } from 'styled-components';
import { SearchInputFieldStyled } from '../../styled-components/input_styled';
import SearchIcon from '@mui/icons-material/Search';
import IconComponent from './IconComponent';

export interface Props {
  type?: string; // for text input
  name?: string; // for text input
  placeholder?: string; // for text input
  radioButtonlabelText?: string; // for radio button
  StyledComponentStyle: StyledComponent<'input', any, {}, never>;
  fieldType?: string; // defines input field type; components are rendered based on type
  dropDownInputOptionsStrings?: String[]; // for dropdown input
  selectedOption?: String;
}

const Input = ({
  StyledComponentStyle,
  type,
  name,
  placeholder,
  fieldType,
  dropDownInputOptionsStrings,
  selectedOption,
  radioButtonlabelText,
  ...props
}: Props) => {
  const dropDownInputFieldType = 'DropdownInputField';
  const radioInputFieldType = 'RadioInputField';
  const searchFieldType = 'SearchField';

  // dropDownInputOptions takes in a react element (<option />)
  // the option strings are stored in dropDownInputOptionsStrings which is a storybook prop and
  // can be edited using storybook
  const dropDownInputOptions: ReactElement<any, any>[] = [];
  dropDownInputOptionsStrings?.forEach(optionString => {
    dropDownInputOptions.push(<option>{optionString}</option>);
  });

  return (
    <React.Fragment>
      {fieldType == dropDownInputFieldType ? (
        <StyledComponentStyle>
          <option value="" selected>
            {selectedOption}{' '}
          </option>
          {dropDownInputOptions}
        </StyledComponentStyle>
      ) : fieldType == radioInputFieldType ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 'max-content',
            alignItems: 'center',
          }}
        >
          <div>
            <StyledComponentStyle type={type} name={name} />
          </div>
          <div>{radioButtonlabelText}</div>
        </div>
      ) : fieldType == searchFieldType ? (
        // BELOW ERR IS SINCE StyledComponentStyle is not inheriting the props interface of a reactdom input component
        <StyledComponentStyle type={type} name={name} placeholder={placeholder}>
          <SearchInputFieldStyled />
          <IconComponent StyledComponentStyle={SearchIcon} />
        </StyledComponentStyle>
      ) : (
        <StyledComponentStyle
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
    </React.Fragment>
  );
};

export default Input;
