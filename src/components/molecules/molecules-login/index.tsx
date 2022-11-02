import AtomPassword from "components/atoms/atom-password";
import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleButton from "components/particles/particle-button";
import ParticleInput from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Styled from "./molecule-login-style";
import { useAuth } from "contexts/auth-context";

export default function MoleculeLogin() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const { login } = useAuth();

  async function handleLogin() {
    login(form.login, form.password);
  }
  return (
    <>
      <AtomSectionHeader
        texto="Entrar na minha Conta"
        subtexto="Acesse sua conta abaixo =)"
      />
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
          value={form.login}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, login: e.target.value }))
          }
        />
        <AtomPassword
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
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
        <ParticleButton onClick={handleLogin}>ENTRAR</ParticleButton>
        <NavLink to="/criarconta">
          Primeiro Acesso?{" "}
          <ParticleText tagType="span">Ative sua conta.</ParticleText>
        </NavLink>
      </Styled.StyledDivForm>
    </>
  );
}
