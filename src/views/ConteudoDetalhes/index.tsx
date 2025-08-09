import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import type { Restaurante } from '../../models/LinkDOsRestaurantes'
import { useDispatch } from 'react-redux'
import { add, openi } from '../../store/reducer/Cart'

// Formata preço em reais
const formataPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)

export const ConteudoDetalhes = () => {
  const dispatch = useDispatch()
  const { id, restauranteId } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${restauranteId}`)
      .then(res => res.json())
      .then((data: Restaurante) => setRestaurante(data))
      .catch(console.error)
  }, [restauranteId])

  if (!restaurante) return <p>Carregando Detalhes...</p>

  const prato = restaurante.cardapio.find((p) => p.id === Number(id))
  if (!prato) return <p>Prato não encontrado</p>

  const adicionarAoCarrinho = () => {
    dispatch(
      add({
        id: prato.id,
        nome: prato.nome,
        preco: prato.preco,
        imagem: prato.foto
      })
    )
    dispatch(openi())
  }

  return (
    <S.CardFundo>
      <S.ImagemComida>
        <img src={prato.foto} alt={prato.nome} />
      </S.ImagemComida>
      <S.CardDetalhes>
        <div className="container">
          <h2>{prato.nome}</h2>
          <p>{prato.descricao}</p>
          <p>
            <b>Serve: </b>
            {prato.porcao}
          </p>
          <S.BotaoAdicionar onClick={adicionarAoCarrinho}>
            Adicionar ao Carrinho - {formataPreco(prato.preco)}
          </S.BotaoAdicionar>
        </div>
      </S.CardDetalhes>
    </S.CardFundo>
  )
}
