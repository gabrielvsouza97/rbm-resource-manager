import AtomSectionHeader from "components/atoms/atom-section-header";
import ParticleText from "components/particles/particle-text";
import Input from "components/particles/particule-input";
import useTheme from "hooks/useTheme";
import * as Styled from "./molecules-login-style";
import { NavLink } from "react-router-dom";
export default function MoleculeLogin() {
  const { theme } = useTheme();
  return (
    <>
      <Styled.StyledDivMain>
        <Styled.StyledDivHeader>
          <AtomSectionHeader
            texto="Entrar na minha Conta"
            subtexto="Acesse sua conta abaixo =)"
          />
        </Styled.StyledDivHeader>
        <Styled.StyledDivForm labelColor={theme.colors.secondary3}>
          <ParticleText tagType="label" for="login-form-email">
            E-mail
          </ParticleText>
          <Input
            type="text"
            placeholder="email@rbmweb.com.br"
            id="login-form-email"
          />
          <ParticleText tagType="label" for="login-form-password">
            Senha
          </ParticleText>
          <Input
            type="password"
            placeholder="Digite sua senha"
            id="login-form-password"
          />
          <Styled.StyledSectionAdctionals
            underlineColor={theme.colors.secondary3}
          >
            <Styled.StyledRemember>
              <Input type="checkbox" id="login-form-remember" />
              <ParticleText tagType="label" for="login-form-remember">
                Salvar Login
              </ParticleText>
              <NavLink to="/alessandra">
                <ParticleText
                  tagType="p"
                  fontSize="14"
                  fontWeight="500"
                  colorText="secondary3"
                  textAlign="Right"
                >
                  Esqueci minha senha
                </ParticleText>
              </NavLink>
            </Styled.StyledRemember>
          </Styled.StyledSectionAdctionals>
        </Styled.StyledDivForm>
      </Styled.StyledDivMain>
    </>
  );
}
