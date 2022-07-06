import styled from 'styled-components';

export const UsernameIconStyled = styled.div<{
  backgroundColor: string;
}>`
  background: ${({ backgroundColor }) => backgroundColor};
  color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
