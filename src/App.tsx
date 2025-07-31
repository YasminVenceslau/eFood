
import './App.css'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'
import { CarrinhoProvider } from './models/CarrinhoContext'

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
      <GlobalCss/>
      <Rotas/>
    </BrowserRouter>
    </CarrinhoProvider>
  )
}

export default App
