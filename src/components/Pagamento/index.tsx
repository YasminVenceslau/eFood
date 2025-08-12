import { useSelector } from "react-redux"; // Importa hook do Redux para acessar o estado global
import { BotaoCArt } from "../Cart/styled"; // Importa o botão estilizado
import type { RootState } from '../../store' // Tipo do estado global
import { ContainerCheckout } from "../Checkout/styles"; // Estilo do container
import { InfoCartao } from "./styles"; // Estilo para os campos do cartão

// Agora as props aceitam voltar e concluirPagamento
export const Pagamento = ({ voltar, concluirPagamento }: { voltar: () => void, concluirPagamento: () => void }) => {
    
    // Busca os itens do carrinho no Redux
    const itens = useSelector((state: RootState) => state.cart.itens)
    
    // Calcula o valor total multiplicando preço pela quantidade
    const ValorTotal = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

    return (
        <ContainerCheckout>
            {/* Título com o valor total */}
            <h4>Pagamento - Valor a pagar R$ {ValorTotal.toFixed(2)}</h4>

            {/* Campo para nome no cartão */}
            <div>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input type="text" id="cardDisplayName" />
            </div>

            {/* Campo para número do cartão e CVV */}
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

            {/* Campo para mês e ano do vencimento */}
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

            {/* Botões de ação */}
            <div className="butone">
                {/* Finaliza o pagamento */}
                <BotaoCArt onClick={concluirPagamento}>
                    Finalizar Pagamento
                </BotaoCArt>

                {/* Volta para o carrinho */}
                <BotaoCArt onClick={voltar}>
                    Voltar para o carrinho
                </BotaoCArt>
            </div>
        </ContainerCheckout>
    )
}
