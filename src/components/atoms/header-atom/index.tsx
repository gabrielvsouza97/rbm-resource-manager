import * as Styled from "./header-atom-style";
import ParticleLogo from "components/particles/particle-logo";
export default function AtomHeader() {
  return (
    <Styled.StyledHeader>
      <Styled.StyledDiv>
        <ParticleLogo />
      </Styled.StyledDiv>
    </Styled.StyledHeader>
  );
}
