import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Restaurante = {
  id: number
  titulo: string
  cardapio: Prato[]
  capa: string
  tipo: string
}


  
export function useRestaurante() {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((item: Restaurante) => item.id === Number(id))
        setRestaurante(encontrado)
      })
  }, [id])

  return restaurante
}