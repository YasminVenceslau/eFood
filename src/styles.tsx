import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
    corPrincipal : '#E66767',
    corBranco:  '#fff',
    corDEFundo: '#FFF8F2',
    corDoROdaPE: '#FFEBD9'
    
}

export const GlobalCss = createGlobalStyle`
  * {
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
        color: ${cores.corPrincipal};
        overflow-x: hidden;
        
    }

    
`

export const Imagem = styled.header`
    width: 100%;
    height: 384px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
   
    margin: 0 auto;
`

export const Logo = styled.p`
    
    margin-bottom: 36px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    

`
export const ImagemCabeca = styled.div`
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px;
`;
