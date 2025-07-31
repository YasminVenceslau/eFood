import styled from "styled-components";
import { cores } from "../../styles";

export const ListaRes = styled.main`
    display: flex;
    justify-content: center;
    padding: 40px 16px;
    color: ${cores.corPrincipal};
    background-color: ${cores.corDEFundo};
    max-width: 1300px;
    margin: 0 auto;
`

export const ConteudoLista = styled.ul`
    max-width: 1024px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    
`

