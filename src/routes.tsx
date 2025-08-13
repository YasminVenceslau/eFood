import { Routes, Route, useLocation } from 'react-router-dom'

import { Home } from './pages/Home'

import { Perfil } from './pages/Perfil'
import { Detalhes } from './pages/Detalhes'
import { Checkout } from './components/Checkout'



export const Rotas = () => {
    const location = useLocation()
  // Se veio de uma rota anterior, salva ela como background

    const state = location.state as { backgroundLocation?: Location }

    return(
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route path='/' element={<Home/>} />
                <Route path='/restaurante/:id' element={<Perfil />} />
                <Route path="/checkout" element={<Checkout voltar={function (): void {
                    throw new Error('Function not implemented.')
                } } carregarPagamento={function (): void {
                    throw new Error('Function not implemented.')
                } } />} />
            </Routes>
             {/* Modal separado */}
            {state?.backgroundLocation && (
            <Routes>
                <Route path="/restaurante/:restauranteId/prato/:id" element={<Detalhes />} />
            </Routes>
            )}
        </>
    )
}

// path="/perfil/:perfilId/restaurante/:restauranteId/prato/:id" element={<Detalhes />}