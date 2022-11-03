import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 410px;
  height: 58px;
  background-color: ${({ theme }) => theme.colors.primary2};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colors.secondary4};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
`;
