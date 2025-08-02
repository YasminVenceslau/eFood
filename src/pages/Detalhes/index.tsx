import { RodaPe } from "../../components/Footer"
import { Banner } from "../../views/Banner"
import { ConteudoDetalhes } from "../../views/ConteudoDetalhes"
import { HeaderPerfil } from "../../views/HeaderPerfil"
import { ListaDoPerfil } from "../../views/ListaDoPerfil"


export const Detalhes = () => {
    return(
        <>
            <HeaderPerfil />
            <Banner />
            <ListaDoPerfil/>
            <ConteudoDetalhes />
            <RodaPe />
        </>
    )
}