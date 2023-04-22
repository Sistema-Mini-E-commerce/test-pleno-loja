import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // array para armazenar os itens do carrinho
  }),
  getters: {
    // getter para obter o total de itens no carrinho
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    // getter para obter o total de preço dos itens no carrinho
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.quantity * item.price), 0),
  },
  actions: {
    // action para adicionar um item ao carrinho
    async addToCart(id) {
      const product = await this.getProductById(id) // obter o produto pelo ID usando a store de produtos
      const index = this.items.findIndex((item) => item.id === id) // verificar se o produto já existe no carrinho
      if (index >= 0) {
        // se o produto já existe no carrinho, incrementar a quantidade
        this.items[index].quantity++
      } else {
        // se o produto não existe no carrinho, adicionar um novo item
        this.items.push({
          id: id,
          name: product.name,
          price: product.price,
          quantity: 1,
        })
      }
      this.saveCartToCookies()
    },
    // action para remover um item do carrinho
    removeFromCart(id) {
      const index = this.items.findIndex((item) => item.id === id)
      if (index >= 0) {
        this.items.splice(index, 1)
        this.saveCartToCookies()
      }
    },
    // action para limpar o carrinho
    clearCart() {
      this.items = []
      this.saveCartToCookies()
    },
    // action para salvar o carrinho nos cookies
    saveCartToCookies() {
      const cartString = JSON.stringify(this.items) // serializar o estado do carrinho
      this.$cookies.set('cart', cartString) // salvar o estado do carrinho nos cookies
    },
    // action para carregar o carrinho dos cookies
    loadCartFromCookies() {
      const cartString = this.$cookies.get('cart') // obter a string do carrinho dos cookies
      if (cartString) {
        this.items = JSON.parse(cartString) // desserializar a string do carrinho
      }
    },
  },
  // hook created para carregar o carrinho dos cookies ao inicializar a store
  created() {
    this.loadCartFromCookies()
  }
})
