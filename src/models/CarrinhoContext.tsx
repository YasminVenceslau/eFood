import React, { createContext, useContext, useState } from 'react'

// Define o tipo do prato
interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

// Define a estrutura do contexto
interface CarrinhoContextType {
  quantidade: number
  adicionarProduto: (produto: Prato) => void
}

// Define a tipagem das props do Provider
interface CarrinhoProviderProps {
  children: React.ReactNode
}

// Cria o contexto
const CarrinhoContexto = createContext<CarrinhoContextType | undefined>(undefined)

// Componente provider que vai envolver a aplicação
export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
  const [quantidade, setQuantidade] = useState(0)

  const adicionarProduto = (produto: Prato) => {
    setQuantidade((qtd) => qtd + 1)
    // Aqui você pode armazenar os pratos, se quiser expandir o carrinho no futuro
    console.log('Produto adicionado:', produto)
  }

  return (
    <CarrinhoContexto.Provider value={{ quantidade, adicionarProduto }}>
      {children}
    </CarrinhoContexto.Provider>
  )
}

// Hook para acessar o carrinho
export const useCarrinho = () => {
  const context = useContext(CarrinhoContexto)
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider')
  }
  return context
}
