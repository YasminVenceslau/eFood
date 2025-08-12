import { useSelector } from "react-redux";
import { BotaoCArt } from "../Cart/styled";
import type { RootState } from '../../store'
import { ContainerCheckout } from "../Checkout/styles";
import { InfoCartao } from "./styles";




export const Pagamento = ({ voltar }: { voltar: () => void }) => {

    const itens = useSelector((state: RootState) => state.cart.itens)
    
    const ValorTotal = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

    return (
        <ContainerCheckout>
            <h4>Pagamento - Valor a pagar R$ {ValorTotal.toFixed(2)}</h4>
            <div>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input type="text" id="cardDisplayName" />
            </div>
            <InfoCartao>
                <div className="nCartao">
                    <label htmlFor="cardNumber">Número no cartão</label>
                    <input type="text" id="cardNumber" />
                </div>
                <div className="nCVV">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" />
                </div>
            </InfoCartao>
            <InfoCartao>
                <div className="mesVen">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input type="text" id="expiresMonth" />
                </div>
                <div className="anoVen">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input type="text" id="expiresYear" />
                </div>
            </InfoCartao>
            <div className="butone">
                <BotaoCArt onClick={voltar}>
                Finalizar Pagamento
                </BotaoCArt>
                <BotaoCArt onClick={voltar}>
                Voltar para o carrinho
                </BotaoCArt>
            </div>
        </ContainerCheckout>
    )
}