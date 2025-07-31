import styled from "styled-components";
import { cores } from "../../styles";

export const RodaPeContainer = styled.div`
    display: inline-block;
    max-width: 1300px;
    margin: 0 auto;
`
export const RedeSocial = styled.ul`
    display: flex;
    justify-content: center;
    padding-bottom: 36px ;
    
    
    li{
        cursor: pointer;
        transition: ease 0.5s ;
    }
    li:nth-child(2) {  
        margin: 0 16px;
        
    }

    a{
        color: ${cores.corPrincipal};
    }

    :hover{
        transform: scale(1.2)
    }
`

export const  ParaRodaPe = styled.p`
    font-size: 10px;
    font-weight: 400;

    text-align: center;
`
