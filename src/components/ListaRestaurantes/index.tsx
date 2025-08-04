import * as S from "./styles"

import { Link } from "react-router-dom"
import { ImagemCabeca } from "../../styles"


type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  avaliacao: string
  descricao: string
  destacado: boolean
}

type Props = {
  restaurantes: Restaurante[]
}

export const ListaRestaurantes = ({ restaurantes }: Props) => {
  return (
    <>
        {restaurantes.map((restaurante) => (
        <S.CardLsita key={restaurante.id}>
          <ImagemCabeca style={{ backgroundImage: `url(${restaurante.capa})` }}>
            <S.Tags>
              <button className={`tag ${restaurante.destacado ? 'destaque' : 'tipo'}`}>
                {restaurante.tipo}
              </button>
            </S.Tags>
          </ImagemCabeca>
          <S.Titulo>
            <p>{restaurante.titulo}</p>
            <span>{restaurante.avaliacao} ⭐</span>
          </S.Titulo>
          <p>{restaurante.descricao}</p>
          <S.BotaoSaibaMais>
            <Link to={`/restaurante/${restaurante.id}`}>Saiba Mais</Link>
          </S.BotaoSaibaMais>
        </S.CardLsita>
      ))}
    </>
  )
}
