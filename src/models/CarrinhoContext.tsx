import React, { createContext, useContext, useState } from 'react'




// Define a estrutura do contexto
interface CarrinhoContextType {
  quantidade: number           // Quantidade total de produtos no carrinho
  adicionarProduto: () => void // Função para adicionar um produto ao carrinho

}

    interface CarrinhoProviderProps {
        children: React.ReactNode
    }
    // Cria o contexto com valor inicial vazio (será preenchido pelo provider)
    const CarrinhoContexto = createContext< CarrinhoContextType | undefined>(undefined)

    // Define a tipagem das props do Provider
    interface CarrinhoProviderProps {
        children: React.ReactNode
    }

    // Componente provider que vai envolver a aplicação
        export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
        const [quantidade, setQuantidade] = useState(0)

        const adicionarProduto = () => setQuantidade((qtd) => qtd + 1)

        return (
            <CarrinhoContexto.Provider value={{ quantidade, adicionarProduto }}>
            {children}
            </CarrinhoContexto.Provider>
    )
    }

// Hook para acessar o carrinho
export const useCarrinho = () => {
    const context = useContext(CarrinhoContexto)
    if(!context) {
        throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider')
    }
    return context
}