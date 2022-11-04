import * as Styled from "./particle-button-style";

type ButtonProps = {
    onClick?: ()=> void;
    children?: React.ReactNode;
    tamanho?: string;
};

export default function ParticleButton (props: ButtonProps){
    return(
        <Styled.ButtonStyled {...props}>{props.children}</Styled.ButtonStyled>
    );

}