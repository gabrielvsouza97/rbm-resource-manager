import { type } from '@testing-library/user-event/dist/type';
import * as Styled from './particule-input-style';

type StylesInputComponents = {
  type: "text" | "password" | "checkbox",
  placeholder?: string,
};

export default function Input(props: StylesInputComponents){
  return(
    <Styled.StyledInput placeholder={props.placeholder} type={props.type}>
    </Styled.StyledInput>
    
  );
}