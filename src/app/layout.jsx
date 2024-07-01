import { Montserrat } from 'next/font/google'

const montserrat =  Montserrat({
  weights: [400, 700],
  subsets: ['latin'],
  display: 'swap'

})

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br" className={`${montserrat.variable}`}>
      <body>
        <header>
          <h2>Análises de Jogos</h2>
          <nav>
            <ul>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/sobre" prefetch={false}>Sobre</a>
              </li>
              <li>
                <a href="/analises">Análises</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          Informações e imagens dos jogos gentilmente cedidos por <a href="https://rawg.io/"
          target="_blank">RAWG</a>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
