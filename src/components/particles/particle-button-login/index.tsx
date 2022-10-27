import * as Styled from "./particle-button-style";

type ItemsButtonProps = {
    text : string;
}

export default function ButtonLogin(props : ItemsButtonProps ){
    return <Styled.ButtonStyled>{props.text}</Styled.ButtonStyled>;
}
