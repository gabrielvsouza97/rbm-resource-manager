import styled from "styled-components";

type StylesTextComponent = {
  colorText?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
};

export const SpanInit = styled.span<StylesTextComponent>`
  color: ${(props) => (props.colorText ? props.colorText : "#262424")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 21)}px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;
