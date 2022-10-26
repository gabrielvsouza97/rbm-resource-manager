import * as Styled from "./example-atom-style";
import ComponentText from "components/particles/particles-text";

export default function ExampleAtom() {
  return (
    <Styled.StyledDiv>
      <Styled.StyledP color="yellow" fontWeight="600">
        Example
      </Styled.StyledP>
      <Styled.StyledP color="blue" fontWeight="500">
        Page
      </Styled.StyledP>
      <ComponentText tagType="h1" colorText="green" idName="teste">
        Um teste de texto
      </ComponentText>
    </Styled.StyledDiv>
  );
}
