
import { ListaRestaurantes } from '../ListaRestaurantes'
import { ListaRes, ConteudoLista } from './styles'

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

type Props = {
  restaurantes: Restaurante[]
}


export const Listagem = ({ restaurantes }: Props) => {
  return (
    <ListaRes>
      <ConteudoLista>
        <ListaRestaurantes restaurantes={restaurantes} />
      </ConteudoLista>
    </ListaRes>
  )
}