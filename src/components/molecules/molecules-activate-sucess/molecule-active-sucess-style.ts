import { THEME } from "../../../constants";
import styled from "styled-components";
type DivColorsProps = {
  labelColor?: keyof typeof THEME.light.colors;
  underlineColor?: string;
};

export const StyledDivHeader = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  h3 {
    padding-top: 50.7px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    text-align: center;
  }
  p {
    padding-bottom: 32px;
    text-align: center;
  }
`;

export const StyledDivForm = styled.div<DivColorsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;
