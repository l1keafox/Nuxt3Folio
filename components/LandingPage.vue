<template>
	<div
		class="flex flex-col items-center justify-center h-screen text-slate-50 text-9xl absolute top-0">
		<h1 data-value="RAYMOND LEWIS" class="font-josefin ml-5">RAYMOND LEWIS</h1>
		<div class="font-josefin text-xl items-end justify-end" id="ClickInfo">
			Click Anywhere
		</div>
	</div>
</template>

<script setup>
	onMounted(() => {
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
</style>

