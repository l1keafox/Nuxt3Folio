<template>
	<div class="flex flex-col absolute top-[158rem] md:top-[136rem] w-screen text-center items-center justify-cente  font-noto text-slate-300 ">

		<div id="projectContainer">
			<template v-for="(project,index) in Portfolios" :key="index">
				<Project v-if="index == pIndex || index == prevIndex || index == nextIndex" :class="{'left':index == prevIndex  ,'center':index == pIndex , 'right':index == nextIndex }" :project="Portfolios[index]" class="project absolute  flex  flex-col items-center justify-center"/>
			</template>
		</div>

		<div class="flex pt-3 w-1/3 justify-around items-center absolute top-[37rem] md:top-[36rem]">
			<button @click="indexLeft" class="bg-slate-600 p-3 rounded-lg hover:bg-slate-700 hover:scale-105">
				&lt;&lt;
			</button>
			<button class="bg-slate-600 p-3 rounded-lg hover:bg-slate-700 hover:scale-105" @click="indexRight">
				>>
			</button>

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
						"My fourth portfolio website, made in Feb of 2023. Using Nuxt3, tailwind and netlify",
					img: "./markIV.png",
					repoLink: "https://github.com/l1keafox/Nuxt3Folio",
					deployLink: "https://vuerayfolio.netlify.app/",
				},
				{
					title: "Professional Vue Portfolio Mk.III",
					description:
						"My Third portfolio website made in November of 2022. This uses from Vue 3 and tailwind",
					img: "./vue.png",
					repoLink: "https://github.com/l1keafox/vueFolio",
					deployLink: "https://gorgeous-sorbet-b95f3f.netlify.app/",
				},
				{
					title: "Professional React Portfolio Mk.II",
					description:
						"My second portfolio made at the end of the bootcamp in Oct of 2022. It uses React, Material UI, tailwind and headless ui.",
					img: "./react.png",
					repoLink: "https://github.com/l1keafox/reactFolio",
					deployLink: "https://l1keafox.github.io/reactFolio/",
				},
				{
					title: "Portfolio Mk.I",
					description:
						"Made in first two weeks of bootcamp made in Sept of 2022, using only HTML/CSS/JS with no frame work.",
					img: "./html.png",
					repoLink: "https://github.com/l1keafox/Rayfolio",
					deployLink: "https://l1keafox.github.io/Rayfolio/",
				},
				{
					title: "Middle-Where",
					description:
						"A refractoring of middleWhere in to the full MERN + socket.io stack",
					img: "./remiddle.png",
					repoLink: "https://github.com/l1keafox/remiddlewhere",
					deployLink: "https://mymiddlewhere.herokuapp.com/",
				},

				{
					title: "Bubble Dungeonz",
					description:
						"A platform for game developers to host multi/single player games to interact with other users. Features a multiplayer bubble popping game, saved chat groups and customized display settings",
					img: "./bubble.png",
					repoLink: "https://github.com/l1keafox/bubbleDungeonz",
					deployLink: "https://bubbledungeonz.herokuapp.com/",
				},

				{
					title: "Middle-Where",
					description:
						"A web app to find a centralized location for a group of friends. Users can create accounts and login, using google maps to display location of friends and the central meeting spot.",
					img: "./mid.png",
					repoLink: "https://github.com/l1keafox/middleWhere",
					deployLink: "https://limitless-temple-38712.herokuapp.com/",
				},
				{
					title: "RealTimeCommodities",
					description:
						"My first group project, taking 5 people to make. It is a web app that will pull commodities news/prices through an API call. Uses google graphs to show history of commodity prices.",
					img: "./one.png",
					repoLink: "https://github.com/l1keafox/RealTimeCommodities",
					deployLink: "https://l1keafox.github.io/RealTimeCommodities/",
				},
				{
					title: "Weather DashBoard",
					description:
						"An web app just made with the front end with bootstrap, jquery and openweathermap.org for the api. It will take in cities and forecast 5 days in the future ",
					img: "./weather.png",
					repoLink: "https://github.com/l1keafox/weatherDashboard",
					deployLink: "https://l1keafox.github.io/weatherDashboard/",
				},
				{
					title: "Team maker",
					description:
						"A node.js application that uses inquire to ask question in the command line. Afterwards it will create an html page of the team you have entered in. ",
					img: "./team.png",
					repoLink: "https://github.com/l1keafox/myTeamSetting",
					deployLink: "https://l1keafox.github.io/myTeamSetting/",
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
  transform: translateX(100%);
}
</style>
