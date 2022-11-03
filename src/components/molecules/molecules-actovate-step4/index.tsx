import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleButton from "components/particles/particle-button";
import ParticleInput from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import { ChangeEvent, useState } from "react";
import alert from "../../../../src/assets/img/MoleculeActivateStep4/alert.svg";
import stop from "../../../../src/assets/img/MoleculeActivateStep4/stop.svg";
import { CriterioWrapper, Icon, InputWrapper } from "./activate-step4-style";

export default function MoleculeActivateStep4() {
  const [valueEmail, setValueEmail] = useState("");
  const [valueConfirmationEmail, setValueConfirmationEmail] = useState("");

  return (
    <>
      <AtomSectionHeader
        texto="Ativar sua conta"
        subtexto="Defina a senha da sua conta."
      />
      <ParticleText tagType="span" colorText="secondary3">Por segurança, a senha deve seguir os critérios abaixo:</ParticleText>
      <CriterioWrapper>
      <Icon src={stop}/>
      <ParticleText tagType="span">Minimo 8 caracteres.</ParticleText>
      </CriterioWrapper>
      <CriterioWrapper>
      <Icon src={stop}/>
      <ParticleText tagType="span">Pelo menos uma letra maiúscula:</ParticleText>
      </CriterioWrapper>
      <CriterioWrapper>
      <Icon src={stop}/>
      <ParticleText tagType="span">Pelo menos um número:</ParticleText>
      </CriterioWrapper>
      <CriterioWrapper>
      <Icon src={alert}/>
      <ParticleText tagType="span">Pelo menos um caracter especial (Ex: !@#$%¨&*):</ParticleText>
      </CriterioWrapper>

        <InputWrapper>
      <ParticleText tagType="label" htmlFor="email" colorText="secondary3">
        Senha
      </ParticleText>
      <ParticleInput
        type="email"
        id="email"
        placeholder="Digite sua senha"
        value={valueEmail}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValueEmail(event.target.value)
        }
      />
      </InputWrapper>
      <InputWrapper>
            <ParticleText tagType="label" htmlFor="EmailConfirmation" colorText="secondary3">
        Confirmar Senha
      </ParticleText>
      <ParticleInput
        type="email"
        id="EmailConfirmation"
        placeholder="Digite sua senha"
        value={valueConfirmationEmail}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValueConfirmationEmail(event.target.value)
        }
      />
      </InputWrapper>
      <ParticleButton>ATIVAR CONTA</ParticleButton>      
    </>
  );
}
