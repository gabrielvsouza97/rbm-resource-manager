import styled from "styled-components";
import { LogoProps } from "./";
export const StyledImgLogo = styled.img<LogoProps>`
  display: block;
  width: ${({ largura }) => (largura ? largura : 122)}px;
  height: ${({ altura }) => (altura ? altura : 35.3)}px;
`;
