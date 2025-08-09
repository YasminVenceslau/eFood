import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
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
    if (!id) return

    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find(
          (item: Restaurante) => item.id === Number(id)
        )
        if (encontrado) {
          setRestaurante(encontrado)
        } else {
          console.warn('Restaurante não encontrado para ID:', id)
          setRestaurante(null) // garante que vai renderizar
        }
      })
      .catch((erro) => {
        console.error('Erro ao carregar restaurante:', erro)
        setRestaurante(null)
      })
  }, [id])

  return restaurante
}