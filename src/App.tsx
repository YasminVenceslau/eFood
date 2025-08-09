
import './App.css'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'
import { CarrinhoProvider } from './models/CarrinhoContext'
import { Cart } from './components/Cart'

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
      <GlobalCss/>
      <Rotas/>
      <Cart/>
    </BrowserRouter>
    </CarrinhoProvider>
  )
}

export default App
