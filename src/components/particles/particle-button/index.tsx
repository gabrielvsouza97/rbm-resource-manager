import * as Styled from "./particle-button-style";

type ButtonProps = {
    onClick?: ()=> void;
    children?: React.ReactNode;
};

export default function ParticleButton (props: ButtonProps){
    return(
        <Styled.StyledButton {...props}>{props.children}</Styled.StyledButton>
    );

}