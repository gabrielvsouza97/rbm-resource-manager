import * as Styled from "./particle-logo-style";
import logo from "../../../assets/img/logo.svg";

export type LogoProps = {
  width?: string;
  altura?: string;
};
export default function ParticleLogo(props: LogoProps) {
  return (
    <Styled.StyledImgLogo
      src={logo}
      alt="Imagem com a logo da RBMWEB by Dimensa"
      title="RBMWEB by Dimensa"
      width={props.width}
      altura={props.altura}
    />
  );
}
