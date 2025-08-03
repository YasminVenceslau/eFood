
import { ConteudoDetalhes } from '../../views/ConteudoDetalhes'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export const Detalhes = () => {
  const navigate = useNavigate()

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Fechar onClick={() => navigate(-1)}>  x </S.Fechar>
        <ConteudoDetalhes />
      </S.ModalContent>
    </S.ModalOverlay>
  )
}