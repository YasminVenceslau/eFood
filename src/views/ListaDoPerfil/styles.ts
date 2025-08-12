import styled from "styled-components";
import { cores } from "../../styles";

export const MainLista = styled.main`
    background-color: ${cores.corBranco};
    padding:56px 132px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin: 0 auto;
    
`

export const CardLista = styled.div`
    background-color: ${cores.corPrincipal};
    color: ${cores.corBranco};
    
    padding: 8px;
    display: flex;
    flex-direction: column;
    

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
    margin-bottom: 8px;
    margin-left: 8px;
    margin-right: 8px;
    font-weight: 300;
`

export const CardButton = styled.button`
    background-color: ${cores.corDoROdaPE};
    padding: 8px;
    width: 100%;
    font-weight: 700;
    
    
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    &:hover {
        background-color: #ffd4b8;
    }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
