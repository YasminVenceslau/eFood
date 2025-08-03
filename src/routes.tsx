import { Routes, Route, useLocation } from 'react-router-dom'

import { Home } from './pages/Home'
import { Perfil } from './pages/Perfil'
import { Detalhes } from './pages/Detalhes'
import { ConteudoDetalhes } from './views/ConteudoDetalhes'

export const Rotas = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <>
    {/* Rotas principais: Home e Perfil */}
    <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/perfil/:perfilId/restaurante/:restauranteId/prato/:id" element={<Detalhes />} />
    </Routes>

    {state?.backgroundLocation && (
    <Routes>
        <Route path="/restaurantes/:restauranteId/prato/:id" element={<ConteudoDetalhes />} />
    </Routes>
    )}
        
    </>
  )
}