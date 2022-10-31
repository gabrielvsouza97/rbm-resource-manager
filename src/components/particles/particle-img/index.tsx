import * as Styled from "./particle-img-style";

export default function ParticleImg(props: any) {
  return (
    <Styled.StyledLogo
      src={props.imgLink}
      width={props.width}
    ></Styled.StyledLogo>
  );
}
