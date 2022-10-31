import styled from "styled-components";
import { LogoProps } from "./";
export const StyledImgLogo = styled.img<LogoProps>`
  display: block;
  width: ${({ width }) => (width ? width : 122)}px;
  height: ${({ altura }) => (altura ? altura : 35.3)}px;
`;
