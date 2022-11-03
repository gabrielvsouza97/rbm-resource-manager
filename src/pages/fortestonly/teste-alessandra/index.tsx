import Input from "components/particles/particle-input";
import ParticleText from "components/particles/particle-text";
import Section from "components/atoms/atom-section";
import Main from "components/molecules/molecules-main";
import MoleculeLogin from "components/molecules/molecules-login";
import MoleculeActivateStep1 from "components/molecules/molecules-activate-step1";
import MoleculeActivateStep2 from "components/molecules/molecules-activate-step2";

const Utils = [<MoleculeActivateStep1 />, <MoleculeActivateStep2 />];

export default function TesteAlessandra() {
  return (
    <>
      {/* <Input placeholder="Digite seu email" type="text"></Input>
      <Input placeholder="Digite sua senha" type="password"></Input>
      <Input  type="checkbox"></Input> */}
      <Main>
        {/* <MoleculeLogin /> */}
        {Utils[0]}
      </Main>
    </>
  );
}
