import { type } from '@testing-library/user-event/dist/type';
import * as Styled from './molecules-input-style';

type PropsInput = {
  placeholder: string,
};

export default function InputText(props: PropsInput){
  return(
    <Styled.StyledInput placeholder={props.placeholder}>
    </Styled.StyledInput>
    
  );
}