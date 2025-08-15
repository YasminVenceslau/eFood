import { useSelector } from "react-redux";
import { BotaoCArt } from "../Cart/styled";
import type { RootState } from '../../store';
import { ContainerCheckout } from "../Checkout/styles";
import { InfoCartao } from "./styles";
import { useFormik } from "formik";
import * as Yup from 'yup';

type PagamentoProps = {
  voltar: () => void;
  concluirPagamento: (orderId: string) => void; // agora recebe o id
  quemRecebe: string;
  endereco: string;
  cidade: string;
  CEP: string;
  numero: string;
  complemento: string;
};

export const Pagamento = ({
  voltar,
  concluirPagamento,
  quemRecebe,
  endereco,
  cidade,
  CEP,
  numero,
  complemento
}: PagamentoProps) => {

  const itens = useSelector((state: RootState) => state.cart.itens);
  const ValorTotal = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const form = useFormik({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .matches(/^\d{3,4}$/, 'CVV deve ter 3 ou 4 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido')
        .required('O campo é obrigatório'),
    }),
    onSubmit: () => {}
  });

  const getErrorMessage = (fieldName: string) => {
    return form.touched[fieldName as keyof typeof form.touched] &&
      form.errors[fieldName as keyof typeof form.errors]
      ? form.errors[fieldName as keyof typeof form.errors]
      : '';
  };

  const enviarPagamento = async () => {
    if (itens.length === 0) {
      alert("Carrinho vazio!");
      return;
    }

    const pedido = {
      products: itens.map(item => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: quemRecebe,
        address: {
          description: endereco,
          city: cidade,
          zipCode: CEP,
          number: Number(numero),
          complement: complemento
        }
      },
      payment: {
        card: {
          name: form.values.cardDisplayName,
          number: form.values.cardNumber,
          code: Number(form.values.cardCode),
          expires: {
            month: Number(form.values.expiresMonth),
            year: Number(form.values.expiresYear)
          }
        }
      }
    };

    try {
      const resposta = await fetch(
        "https://ebac-fake-api.vercel.app/api/efood/checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pedido)
        }
      );

      if (!resposta.ok) throw new Error("Erro ao enviar pedido");

      const dados = await resposta.json();
      console.log("Pedido enviado:", dados);

      // Passa o orderId para o Cart
      concluirPagamento(dados.orderId);

    } catch (error) {
      console.error(error);
      alert("Não foi possível concluir o pagamento");
    }
  };

  return (
    <ContainerCheckout>
      <h4>Pagamento - Valor a pagar R$ {ValorTotal.toFixed(2)}</h4>

      <div>
        <label htmlFor="cardDisplayName">Nome no cartão</label>
        <input
          type="text"
          id="cardDisplayName"
          value={form.values.cardDisplayName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage('cardDisplayName')}</small>
      </div>

      <InfoCartao>
        <div className="nCartao">
          <label htmlFor="cardNumber">Número no cartão</label>
          <input
            type="text"
            id="cardNumber"
            value={form.values.cardNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('cardNumber')}</small>
        </div>
        <div className="nCVV">
          <label htmlFor="cardCode">CVV</label>
          <input
            type="text"
            id="cardCode"
            value={form.values.cardCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('cardCode')}</small>
        </div>
      </InfoCartao>

      <InfoCartao>
        <div className="mesVen">
          <label htmlFor="expiresMonth">Mês do vencimento</label>
          <input
            type="text"
            id="expiresMonth"
            value={form.values.expiresMonth}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('expiresMonth')}</small>
        </div>
        <div className="anoVen">
          <label htmlFor="expiresYear">Ano do vencimento</label>
          <input
            type="text"
            id="expiresYear"
            value={form.values.expiresYear}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('expiresYear')}</small>
        </div>
      </InfoCartao>

      <div className="butone">
        <BotaoCArt
          type="button"
          onClick={() => {
            form.handleSubmit();
            enviarPagamento();
          }}
        >
          Finalizar Pagamento
        </BotaoCArt>

        <BotaoCArt type="button" onClick={voltar}>
          Voltar para o carrinho
        </BotaoCArt>
      </div>
    </ContainerCheckout>
  );
};
