import styled from 'styled-components'

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
  z-index: 999;

  img{
    max-width: 100%;
    width: 100%;
  }
`

export const ModalContent = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  position: relative;
`

export const Fechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`
