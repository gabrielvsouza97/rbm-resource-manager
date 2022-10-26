import ParticleText from "components/particles/particle-text";

const Pessoas = ["Alessandra", "Pedro", "Davi", "Rhuan", "Gabriel"];
export default function TesteGabriel() {
  return (
    <>
      <ParticleText
        tagType="h1"
        colorText={"primary2"}
        fontWeight="700"
        fontSize="64"
        for="email"
      >
        Loren Ipsun
      </ParticleText>
      <ParticleText tagType="h2" colorText={"secondary2"} fontSize="36">
        Feito com 💙 e ☕
      </ParticleText>
      <ParticleText tagType="span" colorText={"primary1"}>
        Alessandra ● Bruno ● Davi ● Eduardo ● Gabriel ● Victor
      </ParticleText>
      <ParticleText tagType="p" colorText={"secondary2"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        doloribus, neque dolorem libero corporis doloremque totam cumque eveniet
        repellendus cupiditate! Itaque blanditiis explicabo sequi eum fugiat
        ipsa quasi eligendi. Ut.
      </ParticleText>

      <ParticleText tagType="p">Grupo de estudos</ParticleText>
      <ul>
        {Pessoas.map((item, index) => (
          <ParticleText tagType="li" key={index} colorText={"secondary2"}>
            {" "}
            {item}
          </ParticleText>
        ))}
      </ul>
    </>
  );
}
