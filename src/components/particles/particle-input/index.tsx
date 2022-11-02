import { type } from "@testing-library/user-event/dist/type";
import { ChangeEvent } from "react";
import * as Styled from "./particule-input-style";

type StylesInputComponents = {
  type: "text" | "password" | "checkbox" | "email";
  placeholder?: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export default function Input(props: StylesInputComponents) {
  return <Styled.StyledInput {...props}></Styled.StyledInput>;
}
