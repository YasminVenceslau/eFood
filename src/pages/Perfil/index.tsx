import { RodaPe } from "../../components/Footer"
import { Banner } from "../../views/Banner"
import { HeaderPerfil } from "../../views/HeaderPerfil"
import { ListaDoPerfil } from "../../views/ListaDoPerfil"

import { PerfilBack } from "./styles"


export const Perfil = () => {
    return(
        <PerfilBack>  
            <HeaderPerfil />
            <Banner />
            <ListaDoPerfil/>
            <RodaPe />
        </PerfilBack>
    )
}