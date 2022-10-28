import * as Styled from "./particle-logo-style";
import logo from "../../../assets/img/logo.svg";

export type LogoProps = {
  largura?: string;
  altura?: string;
};
export default function ParticleLogo(props: LogoProps) {
  return (
    <Styled.StyledImgLogo
      src={logo}
      alt="Imagem com a logo da RBMWEB by Dimensa"
      title="RBMWEB by Dimensa"
      largura={props.largura}
      altura={props.altura}
    />
  );
}
