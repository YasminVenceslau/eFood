import * as S from "./styles"
import SushiImg from '../../assets/imagens/sushi.png'
import Macarrao from '../../assets/imagens/macarrao.png'
import { Link } from "react-router-dom"

export const ListaRestaurantes = () => {
    return(
        <>
            <S.CardLsita>
                        <S.ImagemCabeca style={{backgroundImage:`url(${SushiImg})`}}>
                            <S.Tags>
                                <button className="tag destaque" >Destaque da semana</button>
                                <button className="tag tipo" >Japonesa</button>
                            </S.Tags>
                        </S.ImagemCabeca>
                        <S.Titulo>
                            <p>Hioki Sushi</p>
                            <span>4.9 ⭐</span>
                        </S.Titulo>
                        <p>
                            Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
                        </p>
                            <S.BotaoSaibaMais>
                               Saiba Mais
                            </S.BotaoSaibaMais>
                    
                </S.CardLsita>
                <S.CardLsita>
                        <S.ImagemCabeca style={{backgroundImage:`url(${Macarrao})`}}>
                            <S.Tags>
                                
                                <button className="tag tipo" >Italiana</button>
                            </S.Tags>
                        </S.ImagemCabeca>
                        <S.Titulo>
                            <p>La Dolce Vita Trattoria</p>
                            <span>4.6 ⭐</span>
                        </S.Titulo>
                        <p>
                            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. <br/> Peça já!
                        </p>
                        <S.BotaoSaibaMais>
                                <Link to='/Perfil'>Saiba Mais</Link>
                        </S.BotaoSaibaMais>
                </S.CardLsita>
                <S.CardLsita>
                        <S.ImagemCabeca style={{backgroundImage:`url(${Macarrao})`}}>
                            <S.Tags>
                                
                                <button className="tag tipo" >Italiana</button>
                            </S.Tags>
                        </S.ImagemCabeca>
                        <S.Titulo>
                            <p>La Dolce Vita Trattoria</p>
                            <span>4.6 ⭐</span>
                        </S.Titulo>
                        <p>
                            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. <br/> Peça já!
                        </p>
                        <S.BotaoSaibaMais>
                                <Link to='/Perfil'>Saiba Mais</Link>
                        </S.BotaoSaibaMais>
                    
                </S.CardLsita>
                <S.CardLsita>
                        <S.ImagemCabeca style={{backgroundImage:`url(${Macarrao})`}}>
                            <S.Tags>
                                
                                <button className="tag tipo" >Italiana</button>
                            </S.Tags>
                        </S.ImagemCabeca>
                        <S.Titulo>
                            <p>La Dolce Vita Trattoria</p>
                            <span>4.6 ⭐</span>
                        </S.Titulo>
                        <p>
                            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. <br/> Peça já!
                        </p>
                        <S.BotaoSaibaMais>
                                <Link to='/Perfil'>Saiba Mais</Link>
                        </S.BotaoSaibaMais>
                    
                </S.CardLsita>
                <S.CardLsita>
                        <S.ImagemCabeca style={{backgroundImage:`url(${Macarrao})`}}>
                            <S.Tags>
                                
                                <button className="tag tipo" >Italiana</button>
                            </S.Tags>
                        </S.ImagemCabeca>
                        <S.Titulo>
                            <p>La Dolce Vita Trattoria</p>
                            <span>4.6 ⭐</span>
                        </S.Titulo>
                        <p>
                            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. <br/> Peça já!
                        </p>
                        <S.BotaoSaibaMais>
                                <Link to='/Perfil'>Saiba Mais</Link>
                        </S.BotaoSaibaMais>
                    
                </S.CardLsita>
                <S.CardLsita>
                        <S.ImagemCabeca style={{backgroundImage:`url(${Macarrao})`}}>
                            <S.Tags>
                                
                                <button className="tag tipo" >Italiana</button>
                            </S.Tags>
                        </S.ImagemCabeca>
                        <S.Titulo>
                            <p>La Dolce Vita Trattoria</p>
                            <span>4.6 ⭐</span>
                        </S.Titulo>
                        <p>
                            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. <br/> Peça já!
                        </p>
                        <S.BotaoSaibaMais>
                                <Link to='/Perfil'>Saiba Mais</Link>
                        </S.BotaoSaibaMais>
                    
                </S.CardLsita>
                
        </>
                
    )
}