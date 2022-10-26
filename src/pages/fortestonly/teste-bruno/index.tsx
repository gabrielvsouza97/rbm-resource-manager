import logo from "../../../assets/img/logo.svg";

import ParticleImg from "components/particles/particle-img";
import ParticleText from "components/particles/particle-text";
import ParticleDiv from "components/particles/particle-div";
import MoleculesMain from "components/molecules/molecules-main";

export default function TesteBruno() {
  return (
    <>
      <ParticleDiv>
        <ParticleImg imgLink={logo} width="200px"></ParticleImg>
      </ParticleDiv>
      <MoleculesMain>
        <ParticleText tagType="h1" fontWeight="700" fontSize="64">
          Página Bruno
        </ParticleText>
      </MoleculesMain>
    </>
  );
}
