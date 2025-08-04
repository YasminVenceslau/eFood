
import { ImagemBanner } from './styles'
import { useRestaurante } from '../../models/LinkDOsRestaurantes'





export const Banner = () => {

const restaurante = useRestaurante()

if (!restaurante) {
    return <p>Restaurante não encontrado ou carregando...</p>
    
}
    return(
        <div style={{overflowY:`hidden`}}>
            <ImagemBanner style={{backgroundImage:`url(${restaurante.capa})`}}>
                <i> {restaurante.tipo} </i>
                <h3> {restaurante.titulo} </h3>
            </ImagemBanner>
        </div>
    )
}