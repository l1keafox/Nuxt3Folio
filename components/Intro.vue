<template>
	<div class="flex items-center justify-center w-full text-slate-700 absolute text-4xl p-5 md:p-20">
    <Transition v-show="showAnime" >
		<p>                     
			I am a<span class="text-green-400"> full stack </span>software engineer
			with a background in <span class="text-red-600">malware</span> research. I
			enjoy the process of creating programs, websites, clothes and
			relationships.
		</p>
</Transition>
</div>
</template>

<script setup>
const showAnime = ref(false)
onMounted(()=>{
	setTimeout(()=>{
			showAnime.value = true;
		},100)

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     // console.log(entry, entry.isIntersecting);
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add("show");
    //     } else {
    //       entry.target.classList.remove("show");
    //     }
    //   });
    // });
    // const hidden = document.querySelectorAll(".contentSection");
    // hidden.forEach((el) => observer.observe(el));

})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: filter 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  filter:blur(3px);
}
</style>
