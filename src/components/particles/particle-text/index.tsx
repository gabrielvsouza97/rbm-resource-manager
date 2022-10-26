import { SpanInit } from "./particle-text-style";
export type PropsText = {
  tagType: "h1" | "h2" | "h3" | "p" | "span";
  idName?: string;
  children?: React.ReactNode;
  fontWeight?: string;
  alignText?: string;
  colorText?: string;
  lineHeight?: string;
  fontSize?: string;
};

export default function ParticleText(props: PropsText) {
  return (
    <SpanInit
      as={props.tagType}
      colorText={props.colorText}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      textAlign={props.alignText}
    >
      {props.children}
    </SpanInit>
  );
}
