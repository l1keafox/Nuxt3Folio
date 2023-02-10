<template>
	<Transition v-show="showAnime">
		<div
			class="absolute w-full flex flex-col items-center justify-center md:top-[46rem] top-[43rem]">
			<p
				className="text-5xl block relative text-center font-mukta  dark:text-slate-400">
				My Skillset
			</p>
			<br />
			<div class="flex items-center justify-center flex-wrap px-5">
				<template v-for="skill in skills" :key="skill.name">
					<div class="hover:bg-green-300 tooltip flex">
						<span class="tooltiptext"> {{ skill.name }} </span>
						<Icon class="iconSet" :name="skill.logo" />
					</div>
				</template>
			</div>
		</div>
	</Transition>
</template>

<script setup>
const skills = ref([
	{ name: "html5", logo: "ion:logo-html5" },
	{ name: "react", logo: "ion:logo-react" },
	{ name: "jest", logo: "file-icons:jest" },
	{ name: "bootstrap", logo: "akar-icons:bootstrap-fill" },
	{ name: "mysql", logo: "fontisto:mysql" },
	{ name: "mongodb", logo: "simple-icons:mongodb" },
	{ name: "socket.io", logo: "simple-icons:socketdotio" },
	{ name: "graphql", logo: "akar-icons:graphql-fill" },
	{ name: "tailwind", logo: "simple-icons:tailwindcss" },
	{ name: "handlebars", logo: "simple-icons:handlebarsdotjs" },
	{ name: "github", logo: "bi:github" },
	{ name: "nodejs", logo: "teenyicons:nodejs-solid" },
	{ name: "npm", logo: "mdi:npm" },
	{ name: "vue", logo: "vscode-icons:file-type-vue" },
	{ name: "nuxt", logo: "vscode-icons:file-type-nuxt" },
]);

const showAnime = ref(false);

onMounted(() => {
	setTimeout(() => {
		showAnime.value = true;
	}, 100);
});
</script>

<style scoped>
/* Tooltip container */
.tooltip {
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
	transition: all .5s ease;
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
	margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

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
.iconSet {
	color: azure;
}
</style>
