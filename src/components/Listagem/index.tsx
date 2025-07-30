
import { ListaRestaurantes } from '../ListaRestaurantes'
import { ListaRes, ConteudoLista } from './styles'


export const Listagem = () => {
    return(
        <ListaRes >
            <ConteudoLista >
                <ListaRestaurantes />
            </ConteudoLista>
        </ListaRes>
    )
}