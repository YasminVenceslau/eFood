import { useEffect, useState } from 'react'
import { RodaPe } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Listagem } from '../../components/Listagem'

type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export const Home = () => {
  const [comparProduto, setComparProduto] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setComparProduto(data))
      .catch((err) => console.error('Erro ao buscar dados:', err))
  }, [])

  return (
    <>
      <Header />
      <Listagem restaurantes={comparProduto} />
      <RodaPe />
    </>
  )
}