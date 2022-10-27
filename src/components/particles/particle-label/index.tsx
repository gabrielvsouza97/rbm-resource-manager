import { Label } from "./particle-input-style";
export type PropsText = {
  text?: string;
  children?: React.ReactNode;
  fontWeight?: string;
  colorText?: string;
  fontSize?: string;
  inputType?:  "checkbox"|"text";
};

export default function ParticleLabel(props: PropsText) {
  return (
   <><Label 
   type={props.inputType}
   colorText={props.colorText}
   fontWeight={props.fontWeight}
   fontSize={props.fontSize}
   >
    {props.text}{props.children}
    </Label></>
  );
}
