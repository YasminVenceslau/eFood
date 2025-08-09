import {
  BotaoCArt,
  CartCOntainer,
  CartItem,
  Overlay,
  Price,
  SideBAr
} from './styled'
import { Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { closedi, remove } from '../../store/reducer/Cart'

export const Cart = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
  const itens = useSelector((state: RootState) => state.cart.itens)

  const valorTotal = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  return (
    <CartCOntainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(closedi())} />
      <SideBAr>
        <ul>
          {itens.length === 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            itens.map((item) => (
              <CartItem key={item.id}>
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>
                    R$ {(item.preco * item.quantidade).toFixed(2)} ({item.quantidade}x R${' '}
                    {item.preco.toFixed(2)})
                  </span>
                </div>
                <button type="button" onClick={() => dispatch(remove(item.id))}>
                  <Trash2 />
                </button>
              </CartItem>
            ))
          )}
        </ul>
        <Price>
          Valor Total <span>R$ {valorTotal.toFixed(2)}</span>
        </Price>
        <BotaoCArt type="button" title="Clique aqui e continue">
          Continuar com para a entrega
        </BotaoCArt>
      </SideBAr>
    </CartCOntainer>
  )
}
