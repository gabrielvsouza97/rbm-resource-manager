import ParticleText from "components/particles/particle-text"
import { ThemeProps, ThemeProvider } from "styled-components"
import {THEME} from "../../../constants"

type ThemeContextProps = {
  colors: ColorsTheme
}

type ColorsTheme = {
  primary1: string;
  primary2:string;
  primary3:string;
  secondary1: string;
  secondary2:string;
  secondary3:string;
}
export default function TesteGabriel (props:{theme: ThemeContextProps}) {
  const Pessoas = ["Alessandra", "Pedro", "Davi", "Rhuan", "Gabriel"]
    return (
        <>

      <ParticleText tagType="h1" colorText={props.theme.colors.primary2} fontWeight="700" fontSize="64">
        Loren Ipsun
      </ParticleText>
      <ParticleText tagType="h2" colorText={props.theme.colors.secondary2} fontSize="36">
        Feito com 💙 e ☕
      </ParticleText>
      <ParticleText tagType="span" colorText={props.theme.colors.primary1} >
        Alessandra ● Bruno ● Davi ● Eduardo ● Gabriel ● Victor
      </ParticleText>
      <ParticleText tagType="p" colorText={props.theme.colors.secondary2} >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus, neque dolorem libero corporis doloremque totam cumque eveniet repellendus cupiditate! Itaque blanditiis explicabo sequi eum fugiat ipsa quasi eligendi. Ut.
      </ParticleText>

      <ParticleText tagType="p">
        Grupo de estudos
      </ParticleText>
      <ul>
        {Pessoas.map((item, index) => 
          <ParticleText tagType="li" key={index} colorText={props.theme.colors.primary1}> {item}</ParticleText>
        )}
      </ul>
        </>
    )
}