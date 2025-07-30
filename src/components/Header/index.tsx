import logo from '../../assets/imagens/logo.png'
import fundoImg from '../../assets/imagens/fundo.png'
import { HeaderContent, Texto } from './styles'
import { Imagem, Logo } from '../../styles'

export const Header = () => {
    return(
    <>
        <Imagem style={{backgroundImage:` url(${fundoImg})`}}>
            <HeaderContent>
                <Logo >
                    <img src={logo} alt="eFood " />
                </Logo>
                <Texto>
                    Viva experiências gastronômicas no conforto da sua casa
                </Texto>
            </HeaderContent>
        </Imagem>
    </>
    )
    
}