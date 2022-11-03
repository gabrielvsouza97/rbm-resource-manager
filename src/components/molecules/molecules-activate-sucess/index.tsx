import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleButton from "components/particles/particle-button";
import * as Styled from "./molecule-active-sucess-style";
import ParticleSucess from "components/particles/particle-sucess-icon";
import { StyledSectionSucess } from "components/particles/particle-sucess-icon/particle-sucess-icon-style";
import ParticleText from "components/particles/particle-text";

export default function MoleculeActiveSucess() {

  return (
    <>
    <StyledSectionSucess>
    <AtomSectionHeader/>
      <Styled.StyledDivForm labelColor={"secondary3"}>
      <ParticleSucess width="98.99"/>
      <ParticleText
          tagType="h2"
          fontWeight="700"
          fontSize="20"
          colorText="secondary3"
        >
          Conta ativada!
        </ParticleText>
      <ParticleText
          tagType="p"
          fontWeight="400"
          fontSize="14"
          colorText="secondary3"
        >
          Sua conta foi ativada. Faça login e acesse sua conta.
        </ParticleText>

        <ParticleButton>FAZER LOGIN</ParticleButton> 
      </Styled.StyledDivForm>
    </StyledSectionSucess>
    </>
  );
}
