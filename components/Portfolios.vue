<template>
	<div class="flex flex-col absolute top-[168rem] md:top-[136rem] w-screen text-center items-center justify-cente  font-mukta text-slate-300 ">

		<div id="projectContainer" class="">
			<template v-for="(project,index) in Portfolios" :key="index">
				<Project v-if="index == pIndex || index == prevIndex || index == nextIndex" :class="{'left':index == prevIndex  ,'center':index == pIndex , 'right':index == nextIndex }" :project="Portfolios[index]" class="project absolute flex  flex-col items-center justify-center"/>
			</template>
		</div>

		<div class="flex pt-3 w-1/3 justify-around items-center absolute top-[44rem] md:top-[36rem]">
			
			<MyButton text="&lt;&lt;" color="bg-slate-600" hover="bg-slate-700" @click="indexRight"/>
			<MyButton text=">>" color="bg-slate-600" hover="bg-slate-700" @click="indexLeft"/>

		</div>
	</div>
</template>

<script>
export default {
	name: "MyPortfolio",
	computed:{
		nextIndex(){
			return this.pIndex + 1 > this.Portfolios.length-1 ? 0 : this.pIndex + 1 ;
		},
		prevIndex(){
			return this.pIndex -1 < 0 ? this.Portfolios.length-1 : this.pIndex-1 ;
		}
	},
	methods: {
		indexRight() {
			this.pIndex--;
			if (this.pIndex < 0) {
				this.pIndex = this.Portfolios.length - 1;
			}
			console.log(this.prevIndex, this.pIndex, this.nextIndex);
		},
		indexLeft() {
			this.pIndex++;
			if (this.pIndex >= this.Portfolios.length) {
				this.pIndex = 0;
			}
			console.log(this.prevIndex, this.pIndex, this.nextIndex);
		},
		currentPortfolio() {
			return this.Portfolios;
		},
	},
	data() {
		return {
			pIndex: 0,
			Portfolios: [
				{
					title: "Professional Vue Portfolio Mk.IV",
					description:
						"This webapp, and my fourth portfolio website, made in Feb of 2023.",
					tech:"Nuxt3, Tailwind, Pinia, Nuxt-Icon, and Animejs",
					img: "./markIV.png",
					repoLink: "https://github.com/l1keafox/Nuxt3Folio",
					deployLink: "https://vuerayfolio.netlify.app/",
				},
				{
					title: "Middle-Where",
					description:
						"Application that a group of users can login and find a central location to meet up. Users can be in mulitiple groups, get meet up places, chat with each other in real time, and give feedback",
					tech:"Mongoose, Express, React, Node, Socket.io, JWT, GraphQL, Material UI, Tailwind, Headless UI, Hero Icons, Google Maps API, and EmailJs ",
					img: "./remiddle.png",
					repoLink: "https://github.com/l1keafox/remiddlewhere",
					deployLink: "https://mymiddlewhere.herokuapp.com/",
				},

				{
					title: "Professional Vue Portfolio Mk.III",
					description:
						"My Third portfolio website made in November of 2022.",
					tech:'Vue, Tailwind, Animejs, Headless UI, fortAwesome, and heroIcons',
					img: "./vue.png",
					repoLink: "https://github.com/l1keafox/vueFolio",
					deployLink: "https://gorgeous-sorbet-b95f3f.netlify.app/",
				},
				{
					title: "Professional React Portfolio Mk.II",
					description:
						"My second portfolio made at the end of the bootcamp in Oct of 2022.",
						tech:'React, EmailJs, HeadlessUI, Material UI, and React-icons',
					img: "./react.png",
					repoLink: "https://github.com/l1keafox/reactFolio",
					deployLink: "https://l1keafox.github.io/reactFolio/",
				},
				{
					title: "Portfolio Mk.I",
					description:
						"Made in first two weeks of bootcamp made in Sept of 2022",
					tech:'HTML, CSS, and Javascript',
					img: "./html.png",
					repoLink: "https://github.com/l1keafox/Rayfolio",
					deployLink: "https://l1keafox.github.io/Rayfolio/",
				},

				{
					title: "Middle-Where",
					description:
						"My second group Project from DU boot camp. A web app to find a centralized location for a group of friends. Users can create accounts and login, using google maps to display location of friends and the central meeting spot.",
						tech:"Nodejs, Express, Restful API, mySQL2, Hquelize, Handlebars, and Express-sessions",
					img: "./mid.png",
					repoLink: "https://github.com/l1keafox/middleWhere",
					deployLink: "https://limitless-temple-38712.herokuapp.com/",
				},
				{
					title: "RealTimeCommodities",
					description:
						"My first group project, taking 5 people to make. It is a web app that will pull commodities news/prices through an API call. Uses google graphs to show history of commodity prices.",
						tech:"Google Graphs, HTML, CSS, and JS",
					img: "./one.png",
					repoLink: "https://github.com/l1keafox/RealTimeCommodities",
					deployLink: "https://l1keafox.github.io/RealTimeCommodities/",
				},

				{
					title: "Bubble Dungeonz",
					description:
						"A platform for game developers to host multi/single player games to interact with other users. Features a multiplayer bubble popping game, saved chat groups and customized display settings. This was my third and final project in my boot camp.",
						tech:"Mongoose, Express, React, Nodejs, Socket.io, JWT, Canvas API, and GraphQL ",
					img: "./bubble.png",
					repoLink: "https://github.com/l1keafox/bubbleDungeonz",
					deployLink: "https://bubbledungeonz.herokuapp.com/",
				},

			],
		};
	}
	
};
</script>

<style scoped>
.project{
	transition: all 0.5s ease;
}

#projectContainer{
	width: 100%;
	display:flex;
}
.left{
  position: absolute;
  left: 0;
  transform: translateX(-100%);
}
.center{
  position: absolute;
	width: 100%;
}

.right{
  position: absolute;
  right: 0;
  transform: translateX(-100%);
}
</style>
