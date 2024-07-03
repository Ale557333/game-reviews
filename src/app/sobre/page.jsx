import Link from "next/link"
import Heading1 from "../components/heading-1"

const About = () => {
    return (
        <>
          <Heading1>Sobre Análise de Jogos</Heading1>
          <p>Descriçāo de jogos aqui</p>
          <Link href="/">Voltar para a página inicial</Link>
        </>
    )
}

export default About