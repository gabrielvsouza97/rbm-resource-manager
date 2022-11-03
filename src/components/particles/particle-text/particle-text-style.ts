import styled from "styled-components";
import { THEME } from "../../../constants";
type StylesTextComponent = {
  colorText?: keyof typeof THEME.light.colors;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
};

export const SpanInit = styled.span<StylesTextComponent>`
  color: ${(props) =>
    props.colorText
      ? props.theme.colors[props.colorText]
      : props.theme.colors.secondary2};
  ${({ fontWeight }) => (fontWeight ? "font-weight:" + fontWeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 21)}px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  padding: 0;
  margin: 0;
`;
