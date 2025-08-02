import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCarrinho } from '../../models/CarrinhoContext'
import { ImagemComida } from './styles'

// Define o tipo de um prato individual
type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

// Define o tipo da resposta do restaurante
type Restaurante = {
  id: number
  titulo: string
  cardapio: Prato[]
}

// Função para formatar o valor em reais
const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const ConteudoDetalhes = () => {
  const { adicionarProduto } = useCarrinho()

  // Extrai os parâmetros da URL
  const { id, restauranteId } = useParams()
  
  // Estado para armazenar os dados do restaurante
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  // Busca os dados do restaurante ao carregar o componente
  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${restauranteId}`)
      .then((res) => res.json())
      .then((data: Restaurante) => {
        setRestaurante(data)
      })
      .catch((error) => {
        console.error('Erro ao carregar restaurante:', error)
      })
  }, [restauranteId]) // Corrigido para usar a dependência correta

  // Enquanto os dados não carregam, mostra um loading
  if (!restaurante) return <p>Carregando Detalhes...</p>

  // Busca o prato específico com base no ID da URL
  const prato = restaurante.cardapio.find((p) => p.id === Number(id))

  // Caso não encontre o prato
  if (!prato) return <p>Prato não encontrado</p>

  return (
    <div>
      <h1>{restaurante.titulo}</h1>
      <ImagemComida>
        <img src={prato.foto} alt={prato.nome} />
        <h2>{prato.nome}</h2>
        <p>{prato.descricao}</p>
        <p>{prato.porcao}</p>
        <button onClick={() => adicionarProduto(prato)}>
          Adicionar ao Carrinho - {formataPreco(prato.preco)}
        </button>
      </ImagemComida>
    </div>
  )
}