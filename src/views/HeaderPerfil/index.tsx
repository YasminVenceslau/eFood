import { Link } from 'react-router-dom'
import fundoImg from '../../assets/imagens/HeaderPerfil.png'
import logo from '../../assets/imagens/logo.png'
import * as S from './styles'
import { ArrowLeftFromLine } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { openi } from '../../store/reducer/Cart'
import type { RootState } from '../../store'


export const HeaderPerfil = () => {

    const quantidadeTotal = useSelector((state: RootState) =>
  state.cart.itens.reduce((total, item) => total + item.quantidade, 0)
)
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
                        {quantidadeTotal} produto(s) no carrinho
                    </li>
      </S.COntainer>

            </div>
        </>
    )
}