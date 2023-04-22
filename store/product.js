import { defineStore } from 'pinia';
import { api } from '~/server/api.js';

export const useProductStore = defineStore('produtos', {
  state: () => ({
    url: '/produtos',
    produtos: []
  }),
  getters: {
    /*  */
  },
  actions: {
    async getProduct() {
      try {
        const response = await api.get('/produtos')
        this.produtos = response.data
      } catch (error) {
        console.error(error)
      }
    },
  
    async getProductById(id) {
      try {
        const response = await api.get(`/produtos/${id}`)
        return response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
