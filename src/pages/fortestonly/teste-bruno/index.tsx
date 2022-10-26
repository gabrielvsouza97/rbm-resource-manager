import logo from "../../../assets/img/logo.svg"

import ParticleImg from "components/particles/particle-img"
import ParticleText from "components/particles/particle-text"
import {THEME} from "../../../constants"
import ParticleDiv from "components/particles/particle-div"
export default function TesteBruno () {
    return (
        <>
        <ParticleDiv>
        <ParticleImg imgLink={logo} width="200px"></ParticleImg>

      </ParticleDiv>


      <div></div>

<ParticleText tagType="h1" colorText={THEME.light.colors.primary2} fontWeight="700" fontSize="64">
  Página Bruno
</ParticleText>
        </>
    )
}