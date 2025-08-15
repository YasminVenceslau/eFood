import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerCheckout = styled.div`
   
    h3,h4{
        color: ${cores.corDEFundo} !important;
        padding-bottom: 16px;
        font-size: 16px;
    }
    

    label{
        color: ${cores.corDEFundo} !important;
        font-weight: 700;
        font-size: 14px;
        
    }
    input{
        margin: 8px 0;
        width: 100%;
        max-width: 344px;
        background-color: ${cores.corDoROdaPE};
        border: 1px solid ${cores.corDoROdaPE} ;
        color: #4B4B4B;
        height: 32px;
        font-weight: 700;
        font-size: 14px;
    }
    button{
        margin-bottom: 8px;
        
    }
    .butone{
        margin-top: 24px;
    }
    
    p{
        color:${cores.corDoROdaPE};
        font-size: 14px;
       
        margin-bottom: 24px;
    }

    small{
        color:${cores.corDoROdaPE};
        font-size: 8px;
        display: block;
    }
`
export const CardSecun = styled.div`
    display: flex;

    div:nth-child(2) label {
        margin-left: 32px;
    }

    div:nth-child(2) input {
        width: 82%;
        margin-left: 32px;
    }
`
