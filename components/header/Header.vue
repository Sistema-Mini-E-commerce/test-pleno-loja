<template>
  <div class="w-full border-b-2 border-blue-900 border-solid shadow-md bg-cyan-950 shadow-blue-900 ">
    <div class="w-screen max-w-full text-white top-10 bg-slate-900">
      <div class="flex items-center justify-center h-20">
        <div :class="['top-0', 'flex', 'justify-between', 'w-full', 'md:px-5', { 'fixed': showHeader }, 'md:static']">
          <ul class="hidden space-x-6 capitalize md:inline-flex">
            <li>
              <NuxtLink :class="[{'text-blue-600': $route.path === '/'},'flex', 'font-bold', 'hover:scale-125', 'hover:text-violet-600']" to="/">
                Home
              </NuxtLink>
            </li>

          </ul>
          <div class="ml-5 md:hidden">
            <p >
              {{ currentRoute   }}
            </p>
          </div>
          <div v-show="showHeader" class="fixed top-0 w-full h-full p-4 md:static bg-violet-950 md:hidden bg-opacity-80">
            <div class="flex w-full mt-12">
              <ul class="w-screen h-screen space-y-4 ">
                <li><a href="/" class="px-4 py-2 font-semibold rounded hover:bg-violet-600 hover:scale-y-125">Home</a></li>
              </ul>
            </div>
          </div>
           
          <div 
            :class="[{ 'top-11': showHeader }, 'absolute', 'flex', 'items-center', 'h-5', 'text-center', 'md:static', 'right-5', 'top-7']">

            <small v-if="$device.isMobile" @click="toggleHeader()" class="text-2xl">
              <svg v-if="!showHeader" class="w-10 h-10 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" alt="menu">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg v-if="showHeader" class="w-10 h-10 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </small>
          </div>
          

        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      showHeader: false,
      
    }
  },
  methods: {
    toggleHeader() {
      if (window.innerWidth < 768) {
        this.showHeader = !this.showHeader;
      }
      else if (this.showHeader == true) {
        this.showHeader = !this.showHeader;
      }
    },
  },
  computed: {
    currentRoute() {
      const path = this.$route.path

      if (path === '/') {
        return 'Home'
      }

      return path.slice(1)
    }
  }
}

</script>