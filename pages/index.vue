<template>
  <div class="h-screen bg-white ">
    <div class="w-full p-5 text-blue-950">
      <div class="mt-10 font-bold text-center md:text-2xl">
        Todos os produtos
      </div>
      <div class="flex flex-wrap justify-center mt-5 ">

        <div v-for="produto in produtos" :key="produto.id"
          class="w-full h-full  my-2 text-white rounded-lg bg-violet-950 md:w-[350px] md:mx-2">
          <div>
            <img class="w-full h-auto" src="perfil2.jpeg" alt="">

          </div>
          <div class="flex-wrap h-32 px-2 mt-2 ">
            <div class="flex items-end justify-end">
              <small class="p-1 border-2 border-solid rounded-lg bg-blue-950 border-sky-500">

                <nuxt-link :to="`/${produto._id}`">
                  Ver detalhes
                </nuxt-link>

              </small>
            </div>
            <h1 class="font-bold">
              {{ produto.name }}
            </h1>
            <p>
              {{ produto.description }}
            </p>
            <div class="flex items-end justify-end">
              <small class="mt-5">
                R$:{{ produto.price }}
              </small>
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
      produtos: []
    }
  },
  async created() {
    const productStore = useProductStore()
    await productStore.getProduct()
    this.produtos = productStore.produtos
  }
}
</script>
