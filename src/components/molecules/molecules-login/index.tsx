import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleButton from "components/particles/particle-button-login";
import ParticleInput from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import { Link, NavLink } from "react-router-dom";
import * as Styled from "./molecule-login-style";
export default function MoleculeLogin() {
  return (
    <>
      <Styled.StyledDivHeader>
        <AtomSectionHeader
          texto="Entrar na minha Conta"
          subtexto="Acesse sua conta abaixo =)"
        />
      </Styled.StyledDivHeader>
      <Styled.StyledDivForm labelColor={"secondary3"}>
        <ParticleText tagType="label" for="login-form-email" fontWeight="500">
          E-mail
        </ParticleText>
        <ParticleInput
          type="text"
          placeholder="email@rbmweb.com.br"
          id="login-form-email"
        />
        <ParticleText
          tagType="label"
          for="login-form-password"
          fontWeight="500"
        >
          Senha
        </ParticleText>
        <ParticleInput
          type="password"
          placeholder="Digite sua senha"
          id="login-form-password"
        />
        <Styled.StyledSectionAdctionals underlineColor={"secondary3"}>
          <Styled.StyledRemember>
            <ParticleInput type="checkbox" id="login-form-remember" />
            <ParticleText tagType="label" for="login-form-remember">
              Salvar Login
            </ParticleText>
            <NavLink to="/alessandra">Esqueci minha senha</NavLink>
          </Styled.StyledRemember>
        </Styled.StyledSectionAdctionals>
        <ParticleButton>ENTRAR</ParticleButton>
        <NavLink to="/criarconta">
          Primeiro Acesso?{" "}
          <ParticleText tagType="span">Ative sua conta.</ParticleText>
        </NavLink>
      </Styled.StyledDivForm>
    </>
  );
}
