<template>
    <div id="contactMe" class="flex flex-col absolute w-screen  py-8 gap-x-2 gap-y-1 text-center items-center justify-center font-mono text-slate-300">
        <Transition v-show="showAnime" >
        <div>
        <h1> Contact Me </h1>
        <br/>
        <div class ="flex justify-around items-center">
            <a href="tel:+13034752882" className= "flex flex-col items-center justify-center text-red-500 hover:bg-red-200"> Phone <Icon name="material-symbols:phone-enabled-outline-sharp"/></a>
            <a href="mailto: raymond.ed.lewis@gmail.com" className= "flex flex-col items-center justify-center text-blue-400  hover:bg-blue-100">Email <Icon name="ic:baseline-email"/></a>
            <a href="https://www.linkedin.com/in/raymond-lewis-51719325/" target="_blank" className= "flex flex-col items-center justify-center text-green-600  hover:bg-green-300">Linkedin <Icon name="bi:linkedin" /></a>
            <a href="https://github.com/l1keafox" target="_blank" className= "flex flex-col items-center justify-center text-yellow-300  hover:bg-yellow-100">Github<Icon name ="octicon:mark-github-16" /> </a>
        </div>
    </div>
    </Transition>
    </div>
</template>

<script setup>
const showAnime = ref(false)
onMounted(()=>{
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!showAnime.value) showAnime.value = entry.isIntersecting;
      });
    });
    const hide = document.getElementById('contactMe');
    observer.observe(hide);
})

</script>

<style scoped>
a{
    padding: 5px;
    transition: all .5s ease;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>