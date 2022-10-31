import HeaderAtom from "components/atoms/atom-header";
import * as Styled from "./molecules-main-style";

export default function MoleculeMain(props: any) {
  return (
    <>
      <HeaderAtom />
      <Styled.StyledMain>
        <Styled.StyledSection>Teste</Styled.StyledSection>
      </Styled.StyledMain>
    </>
  );
}
