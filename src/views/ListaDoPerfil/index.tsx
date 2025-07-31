import { useCarrinho } from '../../models/CarrinhoContext'
import { Pratos } from '../../models/pratosDoRestaurante'
import { ImagemCabeca } from "../../styles"
import * as S from './styles'

export const ListaDoPerfil = () => {

    const { adicionarProduto } = useCarrinho()

    return (
    // Container principal da lista de pratos
    <S.MainLista>
      {
        // Itera sobre cada prato e renderiza um card
        Pratos.map((prato) => (
          // Componente de card estilizado para cada prato
          <S.CardLista key={prato.id}>
            {/* Imagem de fundo com estilo inline */}
            <ImagemCabeca style={{ backgroundImage: `url(${prato.imagem})` }} />

            {/* Título do prato */}
            <S.CardTitulo>{prato.title}</S.CardTitulo>

            {/* Descrição do prato */}
            <S.CardTexto>{prato.conteudo}</S.CardTexto>

            {/* Botão para adicionar ao carrinho */}
            <S.CardButton onClick={adicionarProduto} >Adicionar ao carrinho</S.CardButton>  {/* Ao clicar, adiciona 1 produto ao carrinho */}
          </S.CardLista>
        ))
      }
    </S.MainLista>
  )
}