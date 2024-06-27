const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h2>Análises de Jogos</h2>
        </header>
        <main>
          {children}
        </main>
        <footer>Rodapé</footer>
      </body>
    </html>
  )
}

export default RootLayout
