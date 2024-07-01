import Link from "next/link"

const Home = () => {
  return (
    <main>
      <h1>Bem vindo(a) ao Análises de Jogos!</h1>
        <ul>
          <li>
            <Link href="/analises">Analises</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
      </ul>     
    </main>
  )
}

export default Home