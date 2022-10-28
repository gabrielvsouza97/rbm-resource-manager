import * as Styled from './molecules-main-style';

export default function Main(props: any){
  return(
    <Styled.StyledMain>{props.children}</Styled.StyledMain>
  );
}