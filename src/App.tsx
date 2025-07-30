
import './App.css'
import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { RodaPe } from './components/Footer'
import { Listagem } from './components/Listagem'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss/>
      <Rotas/>
    </BrowserRouter>
  )
}

export default App
