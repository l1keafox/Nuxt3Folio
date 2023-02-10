<template>
	<Transition v-show="mounted" >
	<div class="flex flex-col items-center justify-center h-screen text-slate-50 absolute top-0">
		<h1 data-value="RAYMOND LEWIS" class="font-josefin ml-5 text-5xl md:text-9xl ">ADFNVHD REDTS</h1>
		<div class="font-josefin text-xl items-end justify-end" id="ClickInfo">
			Click Anywhere
		</div>
	</div>
</Transition>
</template>

<script setup>
	const logged  = useLogged();
	let mounted = ref(false);
	onMounted(() => {
		setInterval(()=>{
			mounted.value = true;
		},100)
		
		const letters = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
		let docu = document.querySelector("h1");
		let iterations = 0;
		console.log(docu);
		const interval = setInterval(() => {
			docu.innerText = docu.innerText
				.split("")
				.map((letter, index) => {
					if (index < iterations) {
						return docu.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");
			if (iterations >= docu.innerText.length) clearInterval(interval);
			iterations += 1 / 4;
		}, 30);
	});
</script>

<style scoped>
@keyframes redGlow {
	0% {
		color: red;
	}
	50% {
		color: rgb(39, 10, 10);
	}
	100% {
		color: red;
	}
}

#ClickInfo {
	animation: redGlow 3s infinite;
}
.v-enter-active,
.v-leave-active {
transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
opacity: 0;
}
</style>

