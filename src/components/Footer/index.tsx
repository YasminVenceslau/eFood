import { Imagem, Logo } from "../../styles"
import { ParaRodaPe, RedeSocial, RodaPeContainer } from "./styles"

import logo from '../../assets/imagens/logo.png'
import fundoImg from '../../assets/imagens/fundo.png'

import { Facebook, Github, Instagram } from "lucide-react"

export const RodaPe = () => {
    return(
        <>

            <Imagem style={{backgroundImage:` url(${fundoImg})`}}>
                <RodaPeContainer>
                    <Logo >
                        <img src={logo} alt="eFood " />
                    </Logo>
                    <RedeSocial>
                        <li>
                            <Instagram />
                        </li>
                        <li>
                            <Facebook />
                        </li>
                        <li>
                            <a href="https://github.com/YasminVenceslau" target="_blank"> <Github /> </a>
                        </li>
                    </RedeSocial>
                    <ParaRodaPe>
                        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, <br/> qualidade dos produtos é toda do estabelecimento contratado. 
                    </ParaRodaPe>
                </RodaPeContainer>
            </Imagem>
        </>
    )
}