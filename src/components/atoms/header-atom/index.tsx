import * as Styled from "./header-atom-style"
import logo from "../../../assets/img/logo.svg"
export default function AtomHeader(){
    return (
        <Styled.StyledHeader>
            <Styled.StyledDiv>
                <img src={logo} alt="Texto alternativo" width="112px" />
            </Styled.StyledDiv>
        </Styled.StyledHeader>
    )
}