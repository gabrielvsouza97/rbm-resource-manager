import { SpanInit } from "./particles-text-style";
type PropsText = {
  tagType: "h1" | "h2" | "h3" | "p" | "span";
  idName?: string;
  wheigthText?: string;
  alignText?: string;
  children?: React.ReactNode;
  colorText: string;
};

export default function ComponentText(props: PropsText) {
  return (
    <SpanInit as={props.tagType} colorText={props.colorText}>
      {props.children}
    </SpanInit>
  );
}
