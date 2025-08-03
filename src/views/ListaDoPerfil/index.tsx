import { useState } from 'react'
import { ImagemCabeca } from '../../styles'
import * as S from './styles'
import { useRestaurante } from '../../models/LinkDOsRestaurantes'
import { ConteudoDetalhes } from '../ConteudoDetalhes'

// Tipos
type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const ListaDoPerfil = () => {
  const restaurante = useRestaurante()

  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  if (!restaurante) {
    return <p>Carregando restaurante...</p>
  }

  return (
    <>
      <S.MainLista>
        {restaurante.cardapio.map((prato) => (
          <S.CardLista key={prato.id}>
            <ImagemCabeca style={{ backgroundImage: `url(${prato.foto})` }} />
            <S.CardTitulo>{prato.nome}</S.CardTitulo>
            <S.CardTexto>{prato.descricao}</S.CardTexto>
            <S.CardButton
              onClick={() => {
                setPratoSelecionado(prato)
                setMostrarDetalhes(true)
              }}
            >
              Mais Detalhes
            </S.CardButton>
          </S.CardLista>
        ))}
      </S.MainLista>

      {mostrarDetalhes && pratoSelecionado && (
        <S.ModalOverlay onClick={() => setMostrarDetalhes(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <ConteudoDetalhes
              prato={pratoSelecionado}
              onFechar={() => setMostrarDetalhes(false)}
            />
          </div>
        </S.ModalOverlay>
      )}
    </>
  )
}
