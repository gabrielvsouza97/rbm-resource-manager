import styled from "styled-components";

export const StyledDiv = styled.div.attrs((props) => ({}))<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: #e1e1e1;
  border: 1px solid red;
  height: 400px;
  width: 300px;
`;

export const StyledP = styled.p<{ fontWeight: string }>`
  color: ${(props) => props.color};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ theme }) => theme.colors.primary1};
`;
