import ParticleText from "components/particles/particle-text"
import {THEME} from "../../../constants"
export default function TesteBruno () {
    return (
        <>

      <ParticleText tagType="h1" colorText={THEME.light.colors.primary2} fontWeight="700" fontSize="64">
        Página Bruno
      </ParticleText>
        </>
    )
}