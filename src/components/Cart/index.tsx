import { useState } from 'react'
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
import { Checkout } from '../Checkout'
import { Pagamento } from '../Pagamento'
import { Pedido } from '../Pedido'

export const Cart = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
  const itens = useSelector((state: RootState) => state.cart.itens)

  // Estados possíveis do fluxo do carrinho
  const [modo, setModo] = useState<
    'carrinho' | 'checkout' | 'pagamento' | 'concluirPagamento'
  >('carrinho')

  // Calcula o valor total do carrinho
  const ValorTotal = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )

  return (
    <CartCOntainer className={isOpen ? 'is-open' : ''}>
      {/* Clique no fundo fecha o carrinho e volta para o início */}
      <Overlay
        onClick={() => {
          dispatch(closedi())
          setModo('carrinho')
        }}
      />
      <SideBAr>
        {modo === 'carrinho' && (
          <>
            <ul>
              {itens.length === 0 ? (
                <p>Carrinho vazio</p>
              ) : (
                itens.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.imagem} alt={item.nome} />
                    <div className="info">
                      <h3>{item.nome}</h3>
                      <span>
                        R$ {(item.preco * item.quantidade).toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(remove(item.id))}
                    >
                      <Trash2 strokeWidth={1} />
                    </button>
                  </CartItem>
                ))
              )}
            </ul>
            <Price>
              Valor Total <span>R$ {ValorTotal.toFixed(2)}</span>
            </Price>
            <BotaoCArt
              onClick={() => setModo('checkout')}
              type="button"
              disabled={itens.length === 0}
              title={
                itens.length === 0
                  ? 'Carrinho vazio'
                  : 'Clique aqui e continue'
              }
            >
              Continuar para a entrega
            </BotaoCArt>
          </>
        )}

        {modo === 'checkout' && (
          <Checkout
            voltar={() => setModo('carrinho')}
            carregarPagamento={() => setModo('pagamento')}
          />
        )}

        {modo === 'pagamento' && (
          <Pagamento
            voltar={() => setModo('checkout')}
            concluirPagamento={() => setModo('concluirPagamento')}
          />
        )}

        {modo === 'concluirPagamento' && (
          <Pedido
            concluir={() => {
              dispatch(closedi()) // Fecha o carrinho
              setModo('carrinho') // Volta para o início para nova compra
            }}
          />
        )}
      </SideBAr>
    </CartCOntainer>
  )
}
