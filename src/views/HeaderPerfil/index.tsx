import { Link } from 'react-router-dom'
import fundoImg from '../../assets/imagens/HeaderPerfil.png'
import logo from '../../assets/imagens/logo.png'
import * as S from './styles'
import { ArrowLeftFromLine } from 'lucide-react'

export const HeaderPerfil = () => {
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
                    <li>
                        0 produto(s) no carrinho
                    </li>
                </S.COntainer>

            </div>
        </>
    )
}