import { useState } from "react"; 
import { BotaoCArt } from "../Cart/styled";
import { CardSecun, ContainerCheckout } from "./styles";

type CheckoutProps = {
  voltar: () => void;
  carregarPagamento: () => void;
  produtos: { id: number; price: number }[];
  setEntrega: (dados: {
    quemRecebe: string;
    endereco: string;
    cidade: string;
    CEP: string;
    numero: string;
    complemento: string;
  }) => void; // função para salvar dados de entrega
};

export const Checkout = ({ voltar, carregarPagamento, setEntrega }: CheckoutProps) => {
  const [quemRecebe, setQuemRecebe] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [CEP, setCEP] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [loading, ] = useState(false);

  const continuarPagamento = () => {
    if (!quemRecebe || !endereco || !cidade || !CEP || !numero) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    // Salva os dados de entrega para usar no pagamento
    setEntrega({
      quemRecebe,
      endereco,
      cidade,
      CEP,
      numero,
      complemento
    });

    carregarPagamento(); // avança para a etapa de pagamento
  };

  return (
    <ContainerCheckout>
      <h3>Entrega</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="quemRecebe">Quem irá receber</label>
          <input
            id="quemRecebe"
            type="text"
            value={quemRecebe}
            onChange={(e) => setQuemRecebe(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="endereco">Endereço</label>
          <input
            id="endereco"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>

        <CardSecun>
          <div>
            <label htmlFor="CEP">CEP</label>
            <input
              id="CEP"
              type="text"
              value={CEP}
              onChange={(e) => setCEP(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="numero">Número</label>
            <input
              id="numero"
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
        </CardSecun>

        <div>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input
            className="espaco"
            id="complemento"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
      </form>

      <div className="butone">
        <BotaoCArt type="button" onClick={continuarPagamento} disabled={loading}>
          Continuar com o pagamento
        </BotaoCArt>

        <BotaoCArt type="button" onClick={voltar}>
          Voltar para o carrinho
        </BotaoCArt>
      </div>
    </ContainerCheckout>
  );
};
