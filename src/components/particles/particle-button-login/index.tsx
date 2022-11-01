import { ReactElement, ReactNode, useState } from "react";
import * as Styled from "./particle-button-style";

type ItemsButtonProps = {
    children : ReactNode;
    light?: boolean;
    dark?: boolean;
}



export default function ButtonLogin(props : ItemsButtonProps){

    return <Styled.ButtonStyled light={props.light} dark={props.dark}>{props.children}</Styled.ButtonStyled>;
}
