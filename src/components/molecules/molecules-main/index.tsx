import HeaderAtom from "components/atoms/atom-header";
import MoleculeLogin from "../molecules-login";
import * as Styled from "./molecules-main-style";

export default function MoleculeMain(props: any) {
  return (
    <>
      <HeaderAtom />
      <Styled.StyledMain>
        <Styled.StyledSection>Teste</Styled.StyledSection>
        <Styled.StyledSection>
          <MoleculeLogin></MoleculeLogin>
        </Styled.StyledSection>
      </Styled.StyledMain>
    </>
  );
}
