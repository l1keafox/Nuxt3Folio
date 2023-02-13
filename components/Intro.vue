<template>
	<Transition v-show="showAnime" >
	<div class="flex flex-col text-center items-center justify-center font-mono text-slate-700 z-10 absolute text-4xl p-10">
		<p>
			I am a<span class="text-green-400"> full stack </span>software engineer
			with a background in <span class="text-red-600">malware</span> research. I
			enjoy the process of creating programs, websites, clothes and
			relationships.
		</p>
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
.v-enter-active,
.v-leave-active {
  transition: filter 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  filter:blur(3px);
}
</style>
