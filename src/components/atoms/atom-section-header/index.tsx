import ParticleText from "components/particles/particle-text";
import ParticleLogo from "components/particles/particle-logo";
import * as Styled from "./atom-header-page-style";

export default function AtomSectionHeader(props: {
  texto: string;
  subtexto: string;
}) {
  return (
    <Styled.StyledDivHeader>
      <ParticleLogo width="122" />
      <ParticleText tagType="h3" colorText="secondary3">
        {props.texto}
      </ParticleText>
      <ParticleText tagType="p">{props.subtexto}</ParticleText>
    </Styled.StyledDivHeader>
  );
}
