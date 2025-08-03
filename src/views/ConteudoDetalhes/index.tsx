
import { useCarrinho } from '../../models/CarrinhoContext'
import * as S from './styles'
import { CardButton } from '../ListaDoPerfil/styles'

// Tipos
type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}



// Função para formatar o valor em reais
const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}


type Props = {
  prato: Prato
}

export const ConteudoDetalhes = ({ prato, }: Props) => {
  const { adicionarProduto } = useCarrinho()
  return (
    <>
        <S.CardDetalhes>
           <S.ImagemComida>
            
            <img src={prato.foto} alt={prato.nome} />
           </S.ImagemComida>
          <div className='container'>
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <p>{prato.porcao}</p>
            <CardButton onClick={() => adicionarProduto(prato)}>
              Adicionar ao Carrinho - {formataPreco(prato.preco)}
            </CardButton>
          </div>
        </S.CardDetalhes>
    
    </>

  )
}