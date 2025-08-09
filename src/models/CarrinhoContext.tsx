import React, { createContext, useContext, useState } from 'react'

// Tipo do prato
interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

// Estrutura do contexto
interface CarrinhoContextType {
  itens: Prato[]                      // lista dos itens no carrinho
  adicionarProduto: (produto: Prato) => void
  removerProduto: (id: number) => void  // opcional, pra remover item
  limparCarrinho: () => void              // opcional, para limpar tudo
}

// Props do provider
interface CarrinhoProviderProps {
  children: React.ReactNode
}

// Cria o contexto
const CarrinhoContexto = createContext<CarrinhoContextType | undefined>(undefined)

// Provider que envolve a aplicação
export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
  const [itens, setItens] = useState<Prato[]>([])

  const adicionarProduto = (produto: Prato) => {
    setItens((prevItens) => [...prevItens, produto])
  }

  const removerProduto = (id: number) => {
    setItens((prevItens) => prevItens.filter(item => item.id !== id))
  }

  const limparCarrinho = () => {
    setItens([])
  }

  return (
    <CarrinhoContexto.Provider value={{ itens, adicionarProduto, removerProduto, limparCarrinho }}>
      {children}
    </CarrinhoContexto.Provider>
  )
}

// Hook para usar o carrinho
export const useCarrinho = () => {
  const context = useContext(CarrinhoContexto)
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider')
  }
  return context
}
