import * as Styled from "./particle-sucess-icon-style";
import sucess from "../../../assets/img/sucess.svg";

export type SucessProps = {
  width?: string;
  altura?: string;
};
export default function ParticleSucess(props: SucessProps) {
  return (
    <Styled.StyledImgSucess
      src={sucess}
      alt="Imagem Sucesso"
      title="Sucesso"
      width={props.width}
      altura={props.altura}
    />
  );
}
