import styled from "styled-components";
import { cores } from "../../styles";

export const MainLista = styled.main`
    background-color: ${cores.corBranco};
    padding: 32px;
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  
    
`

export const CardLista = styled.div`
    background-color: ${cores.corPrincipal};
    color: ${cores.corBranco};
    padding: 8px;
    display: flex;
  flex-direction: column;
  justify-content: space-between;

`
export const CardTitulo = styled.h4`
    color: ${cores.corBranco};
    font-size: 16px;
    font-weight: bolder;
    margin: 8px;
`

export const CardTexto = styled.p`
    color: ${cores.corBranco};
    font-size: 14px;
    font-weight: 400;
    margin: 8px;
`

export const CardButton = styled.button`
    background-color: ${cores.corDoROdaPE};
    padding: 8px;
    width: 100%;
    font-weight: 700;
    
    
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ffd4b8;
    }
`
