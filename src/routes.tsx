import { Routes, Route, useLocation } from 'react-router-dom'

import { Home } from './pages/Home'
import { Perfil } from './pages/Perfil'
import { Detalhes } from './pages/Detalhes'
import { Checkout } from './components/Checkout'

export const Rotas = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Home />} />
        <Route path='/restaurante/:id' element={<Perfil />} />
        <Route
          path='/checkout'
          element={
            <Checkout
              voltar={() => { throw new Error('Function not implemented.') }}
              carregarPagamento={() => { throw new Error('Function not implemented.') }}
              produtos={[]}
              setEntrega={() => { throw new Error('Function not implemented.') }}
            />
          }
        />
      </Routes>

      {/* Modal separado */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path='/restaurante/:restauranteId/prato/:id' element={<Detalhes />} />
        </Routes>
      )}
    </>
  )
}
