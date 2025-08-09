// Importa as funções do Redux Toolkit Query
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// Tipo representando um restaurante da API
export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  avaliacao: string
  descricao: string
  destacado: boolean
  cardapio: string
}

// Cria a API com endpoints do efood
export const api = createApi({
  // Base da URL que será usada em todos os endpoints
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),

  // Define todos os endpoints que podemos chamar
  endpoints: (builder) => ({
    // Pega todos os restaurantes
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),

    // Pega restaurantes que são destaque
    getRestaurantesDestaque: builder.query<Restaurante[], void>({
      query: () => 'restaurantes?destacado=true'
    }),

    // Pega restaurantes por tipo de cozinha (ex: italiana, japonesa)
    getRestaurantesPorTipo: builder.query<Restaurante[], string>({
      query: (tipo) => `restaurantes?tipo=${tipo}`
    }),

    // Pega restaurante pelo ID específico
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

// Exporta todos os hooks para usar nos componentes
export const {
  useGetRestaurantesQuery,           // Lista todos os restaurantes
  useGetRestaurantesDestaqueQuery,   // Lista apenas os destaques
  useGetRestaurantesPorTipoQuery,    // Lista por tipo de cozinha
  useGetRestauranteQuery             // Detalhes de um restaurante
} = api