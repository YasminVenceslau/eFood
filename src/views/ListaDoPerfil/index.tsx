import { Link } from 'react-router-dom' // para pegar o ID da URL
import { ImagemCabeca } from '../../styles'
import * as S from './styles'
import { useRestaurante } from '../../models/LinkDOsRestaurantes'
import { ConteudoDetalhes } from '../ConteudoDetalhes'

export const ListaDoPerfil = () => {

const restaurante = useRestaurante()

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
          <S.CardButton as={Link} to={`/perfil/id/restaurante/${restaurante.id}/prato/${prato.id}`}>
            Mais Detalhes
          </S.CardButton>
        </S.CardLista>
      ))}
    </S.MainLista>

    
  )
}

export const Detalhes = () => {
  return (
    <S.ModalOverlay>
      <ConteudoDetalhes />
    </S.ModalOverlay>
  )
}