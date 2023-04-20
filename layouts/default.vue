<template>
    <div class="bg-[#212121] text-white">
        <div>
            <body>
            <Header class="sticky top-0 z-30 "/>
                <slot />
                <Footer/>
            </body>
        </div>
    </div>
</template>
  
  
<style scoped>
body {
    margin: 0;
    padding: 0;
}

</style>