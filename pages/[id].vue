<template>
    <div class="h-screen bg-white">
        <div class="w-full p-5 text-blue-950">
            <div class="mt-10 font-bold text-center md:text-2xl">
                Ofertas exclusivas aqui ->
            </div>
            <div class="flex justify-center mt-5">

                <div class="relative flex shadow-2xl rounded-xl shadow-blue-950">
                    <img class="w-7/12 " src="perfil2.jpeg" alt="">
                    <div class="w-full h-full p-4 bg-gray-400 rounded-tr-xl rounded-br-xl">

                        <div class="flex justify-end">
                            <small class="p-1 ">
                                Eletrodomésticos
                            </small>
                        </div>

                        <div>
                            <p>
                                {{ produto.name }}
                            </p>
                            <p>
                                {{ produto.description }}
                            </p>
                            <small>
                                R$ 1.118,51
                            </small>
                        </div>
                        <div class="absolute space-x-4 text-white bottom-4 right-4">
                            <small class="flex justify-end mb-4 text-2xl">
                                R$ 1.118,51
                            </small>
                        <button class="px-4 py-2 bg-red-700 rounded-xl">
                        add no carrinho
                        </button>
                        <button class="px-4 py-2 bg-red-700 rounded-xl">
                        Comprar
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
  
  
<script>
import { useProductStore } from '~/store/product'

export default {
  data() {
    return {
      produto: ''
    }
  },
  async created() {
    const store = useProductStore()
    const id = this.$route.params.id
    this.produto = await store.getProductById(id)
  }
}
</script>