
import { BotaoCArt, CartCOntainer, CartItem, Overlay, Price, SideBAr } from "./styled"


import macarrao from '../../assets/imagens/macarrao.png'
import { Trash2 } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store"
import { closedi } from '../../store/reducer/Cart'


export const Cart = () => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
  const dispatch = useDispatch()
  return (
    <CartCOntainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(closedi())} />
      <SideBAr>
        <ul>
          <CartItem>
            <img src={macarrao} alt="star" />
            <div>
              <h3>nome do jogo</h3>
              
              <span>R$ 150,00</span>
            </div>
            <button type="button"> <Trash2 /></button>
          </CartItem>
          <CartItem>
            <img src={macarrao} alt="star" />
            <div>
              <h3>nome do jogo</h3>
              
              <span>R$ 150,00</span>
            </div>
            <button type="button"> <Trash2 /></button>
          </CartItem>
        </ul>
        <Price>
          Valor Total <span>R$ 150,00</span>
        </Price>
        <BotaoCArt type="button" title="Clique aqui e continue">
          Continuar com para a entrega
        </BotaoCArt>
      </SideBAr>
    </CartCOntainer>
  )
}

