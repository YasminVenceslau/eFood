import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'

import { Perfil } from './pages/Perfil'

import { Detalhes } from './pages/Detalhes'


export const Rotas = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/perfil/:id' element={<Perfil />} />
                <Route  path="/perfil/:perfilId/restaurante/:restauranteId/prato/:id" element={<Detalhes />} />
            </Routes>
        </>
    )
}