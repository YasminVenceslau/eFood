import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  color: ${cores.corBranco} !important;
`
export const CartCOntainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBAr = styled.aside`
  background-color: ${cores.corPrincipal};
  z-index: 1;
  padding: 40px 16px 0 16px;
  width: 360px;
  
`
export const Price = styled.p`

  font-size: 14px;
  color: ${cores.corBranco};
  margin-bottom: 24px;
  padding-top:16px ;
  display: flex;
  justify-content: space-between;
  span {
    color: ${cores.corBranco};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.corBranco};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const BotaoCArt = styled.button`
  background-color: ${cores.corDoROdaPE};
  color: ${cores.corPrincipal};
  padding: 8px 12px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  width: 100%;

  a{
    color: ${cores.corBranco};
  }

  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  &:hover {
    background-color: #f7e0c6;
  }
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.corDoROdaPE}; /* fundo claro */
  padding: 8px;
  margin-bottom: 8px;
  height: 100px;
  width: 344px;
  
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
  }

  div {
    flex: 1;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 344px;
    div{
      justify-content: center;
      padding: 16px;
    }
    h3 {
      display: block;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 4px;
      color: ${cores.corPrincipal};
      padding-bottom: 8px;
    }

    span {
      margin-bottom: 32px;
      font-size: 16px;
      color: ${cores.corPrincipal};
      
    }
  }

  button {
    background: none;
    border: none;
    color: ${cores.corPrincipal};
    cursor: pointer;
    position: relative;
    right: 1px;
    top: 35px;
    
  }
`
