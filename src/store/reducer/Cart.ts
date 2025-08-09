import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  nome: string
  preco: number
  imagem: string
  quantidade: number
}

type CartState = {
  isOpen: boolean
  itens: CartItem[]
}

const initialState: CartState = {
  isOpen: false,
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<CartItem, 'quantidade'>>) => {
      const itemExistente = state.itens.find(item => item.id === action.payload.id)

      if (itemExistente) {
        itemExistente.quantidade += 1
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 })
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(item => item.id !== action.payload)
    },
    openi: (state) => {
      state.isOpen = true
    },
    closedi: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, openi, closedi } = cartSlice.actions
export default cartSlice.reducer
