import { createSlice } from '@reduxjs/toolkit'

// Define o tipo do estado do carrinho
type CartState = {
  isOpen: boolean
}

// Estado inicial do carrinho
const initialState: CartState = {
  isOpen: false
}

// Cria o slice do carrinho
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: () => {},
    openi: (state) => { state.isOpen = true },
    closedi: (state) => { state.isOpen = false }
  }
})

// Exporta as actions
export const { add, openi, closedi } = cartSlice.actions

// Exporta o reducer
export default cartSlice.reducer
