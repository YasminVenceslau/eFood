import { ImagemCabeca } from '../../styles'
import * as S from './styles'
import { useRestaurante } from '../../models/LinkDOsRestaurantes'
import { useNavigate, useLocation } from 'react-router-dom'

export const ListaDoPerfil = () => {
  const restaurante = useRestaurante()
  const navigate = useNavigate()
  const location = useLocation() // <-- isso estava faltando!

  if (!restaurante) {
    return <p>Carregando restaurante...</p>
  }

  return (
    <S.MainLista>
      {restaurante.cardapio.map((prato) => (
        <S.CardLista key={prato.id}>
          <ImagemCabeca style={{ backgroundImage: `url(${prato.foto})` }} />
          <S.CardTitulo>{prato.nome}</S.CardTitulo>
          <S.CardTexto>{prato.descricao}</S.CardTexto>
          <S.CardButton
            onClick={() =>
              navigate(`/restaurante/${restaurante.id}/prato/${prato.id}`, {
                state: { backgroundLocation: location }
              })
            }
          >
            Ver detalhes
          </S.CardButton>
        </S.CardLista>
      ))}
    </S.MainLista>
  )
}