<template>
	<div class="h-[42rem]">
		<h1 class="text-3xl md:text-7xl font-bold pb-5 text-slate-300">
			{{ project.title }}
		</h1>
		<div
			class="w-9/12 flex h-[42rem] md:h-2/3 bg-blue-400 rounded flex-col md:flex-row">
			<div class="h-[18rem] md:h-[30rem] md:w-1/2">
				<img class="md:h-full rounded" :src="project.img" alt="" />
			</div>
			<div class="flex flex-col items-center justify-around md:w-1/2">
				<p
					class="text-lg md:text-xl h-1/2 flex items-center justify-around p-4 font-josefin">
					{{ project.description }}
				</p>
				<p class="text-lg md:text-xl h-1/2 flex items-center justify-around p-4 font-josefin">
					{{ project.tech }}
				</p>
				<div class="h-1/5 md:h-1/3 w-full flex items-center justify-around">
					<a :href="project.repoLink" target="_blank">
						<MyButton text="Git Repo" color="bg-red-500" hover="bg-red-700" />
					</a>

					<a :href="project.deployLink" target="_blank">
						<MyButton
							text="Deployed Link"
							color="bg-green-400"
							hover="bg-green-700" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { project } = defineProps({
	project: Object,
});
</script>
