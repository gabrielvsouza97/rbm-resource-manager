import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleButton from "components/particles/particle-button";
import ParticleInput from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import { ChangeEvent, useState } from "react";

export default function MoleculeActivateStep1() {
  const [valueEmail, setValueEmail] = useState("");

  return (
    <>
      <AtomSectionHeader
        texto="Ativar sua conta"
        subtexto="Informe sua conta empresarial"
      />
      <ParticleText tagType="label" htmlFor="email">
        Email
      </ParticleText>
      <ParticleInput
        type="email"
        id="email"
        placeholder="Digite seu email"
        value={valueEmail}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValueEmail(event.target.value)
        }
      />
      <ParticleButton>Avançar</ParticleButton>
    </>
  );
}
