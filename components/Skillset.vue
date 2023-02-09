<template>
    <Transition v-show="showAnime" >

    <div class="absolute w-full flex flex-col items-center justify-center md:top-[46rem] top-[43rem]">
        <p className="text-5xl block relative text-center font-ubuntu  dark:text-slate-400">
            My Skillset
          </p>
          <br/>
        <div class="flex items-center justify-center flex-wrap px-5">
            <div class="hover:bg-green-200 tooltip"> <span class="tooltiptext"> html5 </span> <Icon class="iconSet" name="ion:logo-html5" /> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> react </span> <Icon class="iconSet" name="ion:logo-react"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> jest </span> <Icon class="iconSet" name="file-icons:jest"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> bootstrap </span> <Icon class="iconSet" name="akar-icons:bootstrap-fill"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> mysql </span> <Icon class="iconSet" name="fontisto:mysql"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> mongodb </span> <Icon class="iconSet" name="simple-icons:mongodb"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> socket.io </span> <Icon class="iconSet" name="simple-icons:socketdotio"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> graphql </span> <Icon class="iconSet" name="akar-icons:graphql-fill"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> tailwind </span> <Icon class="iconSet" name="simple-icons:tailwindcss"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> handlebars </span> <Icon class="iconSet" name="simple-icons:handlebarsdotjs"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> github </span> <Icon class="iconSet" name="bi:github"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> nodejs </span> <Icon class="iconSet" name="teenyicons:nodejs-solid"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> npm </span> <Icon class="iconSet" name="mdi:npm"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> vue </span> <Icon class="iconSet" name="vscode-icons:file-type-vue"/> </div>
            <div class="hover:bg-green-300 tooltip"> <span class="tooltiptext"> nuxt </span> <Icon class="iconSet" name="vscode-icons:file-type-nuxt"/> </div>
        </div>
    
      </div>
</Transition>
</template>

<script setup>

const showAnime = ref(false)

onMounted(()=>{
	setTimeout(()=>{
			showAnime.value = true;
		},100)

})
</script>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.iconSet{
    color:azure
}
</style>