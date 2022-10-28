import ParticleText from "components/particles/particle-text";
import ParticleLogo from "components/particles/particle-logo";
import * as Styled from "./atom-header-page-style";

export default function AtomSectionHeader(props: {
  texto: string;
  subtexto: string;
}) {
  return (
    <>
      <ParticleLogo />
      <ParticleText tagType="h3" colorText="secondary3">
        {props.texto}
      </ParticleText>
      <ParticleText tagType="p" colorText="secondary3">
        {props.texto}
      </ParticleText>
    </>
  );
}
