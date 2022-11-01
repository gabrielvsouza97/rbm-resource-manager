import AtomPassword from "components/atoms/atom-password";
import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleButton from "components/particles/particle-button-login";
import ParticleInput from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Styled from "./molecule-login-style";

export default function MoleculeLogin() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  return (
    <>
      <Styled.StyledDivHeader>
        <AtomSectionHeader
          texto="Entrar na minha Conta"
          subtexto="Acesse sua conta abaixo =)"
        />
      </Styled.StyledDivHeader>
      <Styled.StyledDivForm labelColor={"secondary3"}>
        <ParticleText
          tagType="label"
          htmlFor="login-form-email"
          fontWeight="500"
        >
          E-mail
        </ParticleText>
        <ParticleInput
          type="text"
          placeholder="email@rbmweb.com.br"
          id="login-form-email"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValueEmail(event.target.value)
          }
          value={valueEmail}
        />
        <AtomPassword
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValuePassword(event.target.value)
          }
          value={valuePassword}
        >
          Senha
        </AtomPassword>
        <Styled.StyledSectionAdctionals underlineColor={"secondary3"}>
          <Styled.StyledRemember>
            <ParticleInput type="checkbox" id="login-form-remember" />
            <ParticleText tagType="label" htmlFor="login-form-remember">
              Salvar Login
            </ParticleText>
            <NavLink to="/alessandra">Esqueci minha senha</NavLink>
          </Styled.StyledRemember>
        </Styled.StyledSectionAdctionals>
        <ParticleButton text="Entrar"></ParticleButton>
        <NavLink to="/criarconta">
          Primeiro Acesso?{" "}
          <ParticleText tagType="span">Ative sua conta.</ParticleText>
        </NavLink>
      </Styled.StyledDivForm>
    </>
  );
}
