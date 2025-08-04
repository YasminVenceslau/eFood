import styled from "styled-components"
import { cores } from "../../styles"

export const CardFundo = styled.div`
  background-color: #e66767 !important;
  width: 1024px;
  height: 344px;
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
  align-items: center;

  p{
      padding: 8px;
      color: ${cores.corBranco};
      font-size : 14px;
      font-weight: 400;
  }
  b{
    color: ${cores.corBranco};
  }
  h2{
    color: ${cores.corBranco};
    padding: 8px;
    font-size: 18px;
    font-weight: 900;
  }
.container{
  padding: 8px;
}
`

export const ImagemComida = styled.div`
    
    img{
        max-width: 100%;
        width: 280px;
        height: 280px;
        object-fit: cover;
        padding: 8px;
    }

`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 999;
  
`

export const BotaoAdicionar = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: bold;
  padding: 4px 8px;
  border: none;
  cursor: pointer;
  max-width: fit-content;
  margin: 8px;
  &:hover {
    background-color: #f7e0c6;
  }
`

export const BotaoFechar = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`
export const CardDetalhes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;
`