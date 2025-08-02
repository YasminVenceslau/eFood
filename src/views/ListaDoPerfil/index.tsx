import { Link, useParams } from 'react-router-dom' // Importa useParams também
import { ImagemCabeca } from '../../styles'
import * as S from './styles'
import { useRestaurante } from '../../models/LinkDOsRestaurantes'

export const ListaDoPerfil = () => {
  const restaurante = useRestaurante()
  const { id } = useParams() // captura o ID do perfil da URL

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
          
          {/* Monta a URL corretamente com todos os IDs */}
          <S.CardButton
            as={Link}
            to={`/perfil/${id}/restaurante/${restaurante.id}/prato/${prato.id}`}
          >
            Mais Detalhes
          </S.CardButton>
        </S.CardLista>
      ))}
    </S.MainLista>
  )
}
