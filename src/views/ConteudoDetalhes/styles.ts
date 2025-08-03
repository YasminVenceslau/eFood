import styled from "styled-components"
import { cores } from "../../styles"

export const ImagemComida = styled.div`
    
    img{
        max-width: 20%;
        width: 280px;
        height: 280px;
        object-fit: cover;
        padding: 8px;
    }

    
    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
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
  align-items: center;
  z-index: 999;
`

export const ModalContainer = styled.div`
  background-color: #e66767;
  color: #fff;
  padding: 32px;
  max-width: 1024px;
  width: 90%;
  position: relative;
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`

export const ConteudoModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TituloModal = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const DescricaoModal = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const BotaoAdicionar = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: bold;
  padding: 4px 8px;
  border: none;
  cursor: pointer;
  max-width: fit-content;
  
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
  display: flex;
  max-width: 1024px;
  background-color: #e66767;
    
  img{
    max-width: 100%;
    object-fit: cover;
    
}
  .container{
    width: 300px;
    padding: 8px;
    
    h2{
      font-size: 18px;
      color: ${cores.corBranco};
      padding-left: 8px;
      padding-bottom: 8px;
    }
    p{
      font-size: 14px;
      padding: 8px;
      
      color: ${cores.corBranco};
    }
    .button{
      padding-top: 10px;
      margin:6px ;
    }
  }

`