import { THEME } from "../../../constants";
import styled from "styled-components";
import { SucessProps } from ".";

export const StyledImgSucess = styled.img<SucessProps>`
  display: block;
  width: ${({ width }) => (width ? width : 98.99)}px;
  height: ${({ altura }) => (altura ? altura : 98.99)}px;
  top: 181px;
  
`;
export const StyledSectionSucess = styled.section`
  width: 411px;
  height: 577px;
  padding: 42px 32px;
  margin: 5%;
  background-color: #FFFFFF;
`;

export const StyledDivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

