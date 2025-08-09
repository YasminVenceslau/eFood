import { Link } from 'react-router-dom'
import fundoImg from '../../assets/imagens/HeaderPerfil.png'
import logo from '../../assets/imagens/logo.png'
import * as S from './styles'
import { ArrowLeftFromLine } from 'lucide-react'
import { useCarrinho } from '../../models/CarrinhoContext'
import { useDispatch } from 'react-redux'
import { openi } from '../../store/reducer/Cart'


export const HeaderPerfil = () => {

    const { quantidade } = useCarrinho()  // obtém a quantidade de produtos no carrinho
    const dispatch = useDispatch()
    

    return(
        <>
            <div style={{backgroundImage:`url(${fundoImg})`}}>
                <S.COntainer>
                    <li >
                        <Link 
                            to="/"
                            style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#e66767',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            fontSize: '18px',
                            }}
                        >
                            <ArrowLeftFromLine size={20} />
                            Restaurantes
                        </Link>   
                    </li>
                    <li>
                        <S.Logo src={logo} alt="eFood " />
                    </li>
                    {/* Ao clicar, abre o carrinho */}
                    <li
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(openi())}
                    >
                        {quantidade} produto(s) no carrinho
                    </li>
      </S.COntainer>

            </div>
        </>
    )
}