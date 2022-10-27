<<<<<<< HEAD
import InputText from "components/molecules/molecules-input"
import ParticleText from "components/particles/particle-text"
import {THEME} from "../../../constants"
export default function TesteAlessandra () {
    return (
        <>

      <ParticleText tagType="h1" colorText={THEME.light.colors.primary2} fontWeight="700" fontSize="64">
        Página Alessandra
      </ParticleText>
      <InputText placeholder="Digite seu email"></InputText>

        </>
    )
}
=======
import ParticleText from "components/particles/particle-text";
export default function TesteAlessandra() {
  return (
    <>
      <ParticleText tagType="h1" fontWeight="700" fontSize="64">
        Página Alessandra
      </ParticleText>
    </>
  );
}
>>>>>>> 8452184e650fb2e672f6fd894b4293b77a24d292
