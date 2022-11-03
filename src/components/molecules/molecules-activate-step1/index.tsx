import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AtomSectionHeader from "components/atoms/atom-section-header";
import { StyledDiv } from "components/atoms/example-atom/example-atom-style";
import ParticleButton from "components/particles/particle-button";
import ParticleInput from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import { ChangeEvent, useState } from "react";
import * as Styled from "./activate-step1-style";

export default function MoleculeActivateStep1() {
  const [valueEmail, setValueEmail] = useState("");

  return (
    <>
      <AtomSectionHeader
        texto="Ativar minha conta"
        subtexto="Informe seu e-mail empresarial"
      />
      <Styled.StyledForm>
        <ParticleText tagType="label" htmlFor="input-email">
          E-mail
        </ParticleText>
        <ParticleInput
          type="email"
          id="input-email"
          placeholder="Digite seu email"
          value={valueEmail}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValueEmail(event.target.value)
          }
        />
        <ParticleButton>Avançar</ParticleButton>
        <ParticleText tagType="p">
          <FontAwesomeIcon icon={faCircleInfo} /> Caso ainda não tenha recebido
          seu e-mail, entre em contato com o RH.
        </ParticleText>
      </Styled.StyledForm>
    </>
  );
}
