import { THEME } from "../../../constants";
import { SpanInit } from "./particle-text-style";
export type PropsText = {
  tagType: "h1" | "h2" | "h3" | "p" | "span" | "li" | "label";
  idName?: string;
  for?: string;
  children?: React.ReactNode;
  fontWeight?: string;
  textAlign?: string;
  colorText?: keyof typeof THEME.light.colors;
  lineHeight?: string;
  fontSize?: string;
  padding?: string;
};

export default function ParticleText(props: PropsText) {
  return (
    <SpanInit as={props.tagType} {...props}>
      {props.children}
    </SpanInit>
  );
}
