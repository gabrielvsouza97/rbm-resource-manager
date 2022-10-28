import * as Styled from "./atom-section-style";
import ParticleText from "components/particles/particle-text";
export default function Section() {
  return (
    <Styled.StyledSection>
      <Styled.StyledDiv>
      <ParticleText tagType={"h1"} fontWeight="700" fontSize="64" colorText="primary2">Lorem ipsum</ParticleText>
      <ParticleText tagType={"h3"} fontWeight="400" fontSize="31" colorText="secondary3">Lorem ipsum</ParticleText>
      <ParticleText tagType={"p"} fontWeight="400" fontSize="18" colorText="primary2">
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="primary2">Lorem ipsum</ParticleText>
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="primary2">Lorem ipsum</ParticleText>
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="primary2">Lorem ipsum</ParticleText>
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="primary2">Lorem ipsum</ParticleText>
      </ParticleText>
      <ParticleText tagType={"p"} fontWeight="400" fontSize="18" colorText="secondary3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </ParticleText>
      <ParticleText tagType={"p"} fontWeight="400" fontSize="18" colorText="secondary3">Equipe 🚀</ParticleText>
      <ParticleText tagType={"p"} fontWeight="400" fontSize="18" colorText="secondary3"> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
        <ParticleText tagType={"li"} fontWeight="400" fontSize="18" colorText="secondary3">Lorem Ipsum 🚀</ParticleText> 
      </ParticleText>
    
      </Styled.StyledDiv>
      </Styled.StyledSection>
  );

}