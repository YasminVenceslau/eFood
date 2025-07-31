import * as S from "./styles"

import { Link } from "react-router-dom"
import { ImagemCabeca } from "../../styles"
import { listaDeRestaurantes } from "../../models/restaurantes"

export const ListaRestaurantes = () => {
  return (
    <>
      {listaDeRestaurantes.map((restaurante) => (
        <S.CardLsita key={restaurante.id}>
          <ImagemCabeca style={{ backgroundImage: `url(${restaurante.imagem})` }}>
            <S.Tags>
              {restaurante.infos.map((info, index) => (
                <button
                  key={index}
                  className={`tag ${
                    info.toLowerCase().includes('destaque') ? 'destaque' : 'tipo'
                  }`}
                >
                  {info}
                </button>
              ))}
            </S.Tags>
          </ImagemCabeca>
          <S.Titulo>
            <p>{restaurante.title}</p>
            <span>{restaurante.nota}</span>
          </S.Titulo>
          <p>{restaurante.descricao}</p>
          <S.BotaoSaibaMais>
            <Link to='/Perfil'>Saiba Mais</Link>
          </S.BotaoSaibaMais>
        </S.CardLsita>
      ))}
    </>
  )
}
