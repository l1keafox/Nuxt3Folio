<template>
    <div id="resume" class="flex flex-col w-screen absolute py-8 gap-x-2 gap-y-1 text-center items-center justify-center font-mono text-slate-300">
      <Transition v-show="showAnime"> 
        <div className="flex flex-col items-center">
            <a className="items-center justify-center p-3" href='./Raymond_Lewis_Resume.pdf' target="_blank">
              <MyButton text="Download Pdf" color="bg-red-500" hover="bg-red-700"/>
              <img src="~/assets/blah.png" class="scale-y-75 scale-x-95 md:scale-100" />

            </a>
          </div>
        </Transition>
    </div>

</template>

<script setup>
  const  showAnime = ref(false);
  onMounted(()=>{
    const thisEle = document.getElementById('resume');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!showAnime.value)      showAnime.value = entry.isIntersecting;
      });
    });
    observer.observe(thisEle);

  } )
</script>

<style scoped>
img{
    height: 85vh;
}
.v-enter-active,
.v-leave-active {
	transition: all 2.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  bottom: 0;
  transform: translateY(100%);

}
</style>