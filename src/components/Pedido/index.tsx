import { BotaoCArt } from "../Cart/styled"
import { ContainerCheckout } from "../Checkout/styles"


export const Pedido = ({ concluir }: { concluir: () => void }) => {
    return(
        <ContainerCheckout>
            <h4>Pedido realizado - ORDER_ID</h4>
            <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
            </p>
            <p>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </p>
            <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </p>

             <BotaoCArt onClick={concluir}>
                Concluir
            </BotaoCArt>
        </ContainerCheckout>

    )
}