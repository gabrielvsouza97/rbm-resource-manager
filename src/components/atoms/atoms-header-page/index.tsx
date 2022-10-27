import ParticleImg from "components/particles/particle-img"
import * as Styled from "./atom-header-page-style"
import logo from "../../../assets/img/logo.svg"
import ParticleText from "components/particles/particle-text"

export default function AtomHeaderPages(props: {texto:string, subtexto:string}){
    return <>
            <ParticleImg imgLink={logo} descricao="Texto da empresa"/>
            <ParticleText tagType="h3" colorText="secondary3" fontWeight="700" fontSize="20" textAlign="center">{props.texto}</ParticleText>
            <ParticleText tagType="p" colorText="secondary3" textAlign="center">{props.texto}</ParticleText>
        </>
}