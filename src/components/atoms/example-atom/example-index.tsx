import * as Styled from "./example-atom-style";
export default function ExampleAtom() {
  return (
    <Styled.StyledDiv>
      <Styled.StyledP color="yellow" fontWeight="600">
        Example
      </Styled.StyledP>
      <Styled.StyledP color="blue" fontWeight="500">
        Page
      </Styled.StyledP>
    </Styled.StyledDiv>
  );
}
