import GlobalEstilo, { Container } from './Estiloglobal/style'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <GlobalEstilo />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
