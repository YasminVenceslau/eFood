
import styled from "styled-components";
import { cores } from '../../styles';

export const ImagemBanner = styled.div`
     width: 100vw; /* ocupa toda a largura da viewport */
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; /* centraliza a imagem */
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