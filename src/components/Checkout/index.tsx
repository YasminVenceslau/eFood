import { BotaoCArt } from "../Cart/styled"
import { CardSecun, ContainerCheckout } from "./styles"

type CheckoutProps = {
  voltar: () => void
  carregarPagamento: () => void
}

export const Checkout = ({ voltar, carregarPagamento }: CheckoutProps) => {
  return (
    <ContainerCheckout>
      <h3>Entrega</h3>
      <form>
        <div>
          <label htmlFor="quemRecebe">Quem irá receber</label>
          <input id="quemRecebe" type="text" />
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input id="endereco" type="text" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input id="cidade" type="text" />
        </div>
        <CardSecun>
          <div>
            <label htmlFor="CEP">CEP</label>
            <input id="CEP" type="text" />
          </div>
          <div>
            <label htmlFor="numero">Número</label>
            <input id="numero" type="text" />
          </div>
        </CardSecun>
        <div>
          <label htmlFor="complemento">Complemento (opicional)</label>
          <input className="espaco" id="complemento" type="text" />
        </div>
      </form>

      <div className="butone">
        <BotaoCArt onClick={carregarPagamento}>
          Continuar com o pagamento
        </BotaoCArt>
        <BotaoCArt onClick={voltar}>
          Voltar para o carrinho
        </BotaoCArt>
      </div>
    </ContainerCheckout>
  )
}
