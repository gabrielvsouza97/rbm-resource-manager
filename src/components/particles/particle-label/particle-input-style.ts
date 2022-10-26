import styled from "styled-components";

type StylesLabelComponent = {
  colorText?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
  type?: "checkbox"|"text";
};

export const Label = styled.label<StylesLabelComponent>`
  color: ${(props) => (props.colorText ? props.colorText : "#262424")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
`