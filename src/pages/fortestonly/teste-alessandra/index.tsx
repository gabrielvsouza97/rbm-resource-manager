
import InputText from "components/particles/particule-input"
import ParticleText from "components/particles/particle-text"

export default function TesteAlessandra () {
    return (
        <>

<ParticleText tagType="h1" fontWeight="700" fontSize="64">
        Página Alessandra
      </ParticleText>
      <InputText placeholder="Digite seu email" type="text"></InputText>
      <InputText placeholder="Digite sua senha" type="password"></InputText>
      <InputText  type="checkbox"></InputText>

        </>
    )
}