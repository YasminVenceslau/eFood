import styled from "styled-components";
import { cores } from "../../styles";

export const CardLsita = styled.li`
    border: 1px solid ${cores.corPrincipal};
    padding: 16px;
    border-radius: 8px;
    background-color: ${cores.corBranco};

    a{
        color: ${cores.corPrincipal};
    }

    .tags{
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        gap: 8px;
        
    }
    .tag {
        font-size: 12px;
        padding: 4px 8px;
        background-color: ${cores.corPrincipal};
        color: ${cores.corBranco};
        border: none;
        border-radius: 4px;
        cursor: default;
        white-space: nowrap;
    }

    p {
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 12px;
    }

    
`
export const Tags = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 8px;
        
    
    .tag {
        font-size: 12px;
        padding: 4px 8px;
        background-color: ${cores.corPrincipal};
        color: ${cores.corBranco};
        border: none;
        border-radius: 4px;
        cursor: default;
        white-space: nowrap;
    }
`

export const Titulo = styled.h3`

    margin: 16px 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 18px;
    }

    span {
        font-size: 16px;
        font-weight: bold;
        }

`



export const BotaoSaibaMais = styled.button`
  background-color: ${cores.corPrincipal};
  color: ${cores.corBranco};
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  a{
    color: ${cores.corBranco};
  }
`;