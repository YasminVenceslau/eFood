import bannero from '../../assets/imagens/banner.png'
import styled from "styled-components";
import { cores } from '../../styles';

export const ImagemBanner = styled.div`
    height: 280px;
    background-image: url(${bannero});
    background-repeat: no-repeat;
    padding: 24px;
    overflow-y: hidden;
    
    i{
        color: ${cores.corBranco} !important;
        font-weight: lighter;
        margin:  64px;
        font-size:32px ;
    }

    h3{
        margin: 125px 64px;
        color: ${cores.corBranco} !important;
        font-size: 32px;
    }
`