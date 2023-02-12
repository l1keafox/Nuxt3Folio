<template>
	<Transition v-show="showAnime" >
		<div id="backGround" class="overflow-hidden">
			<div id="blueSplit" class="overflow-hidden"></div>

			<div id="greyParent">
				<div id="greySplitTop" class="md:top-[100px]"></div>
				<div id="greySplitMiddle" class="top-[-120px] h-[900px]  md:h-[730px] lg:h-[500px]"></div>
				<div id="greySplitBottom" class="top-[-150px] md:top-[-500px]"></div>
			</div>
			<div id="redParent" class = "-top-[50px]">
				<div id="redSplitTop" class="md:top-[100px]"></div>
				<div id="redSplitMiddle" class="top-[-120px] h-[900px]  md:h-[730px] lg:h-[500px]"></div>
				<div id="redSplitBottom" class="top-[-150px] md:top-[-500px]"></div>
			</div>
				<div id="blackSplit" class="md:h-[75rem] h-[70rem] top-[55rem]"></div>

	</div>
</Transition>
</template>
top: -120px;
height: 350px;

<script>
export default {
	name: "BackGround",
	data(){
		return {
			showAnime: false
		}
	},
	mounted(){
		setTimeout(()=>{
			this.showAnime = true;
		},100)
	}
};
</script>

<style scoped>
* {
	transition: all 0.1s linear;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
#backGround {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: -10000;
}
#blueSplit {
	position: relative;
	height: 1500px;
	width: 99%;
	top: -900px;
	background-color: rgb(74, 100, 203);
	transform: skew(0deg, -5deg);
	z-index: -10000;
}
#blackSplit {
	position: relative;
	width: 100%;
	background-color: rgb(20, 20, 20);
	transform: skew(0deg, -5deg);
	z-index: -10000;
}

#greyParent {
	position: relative;
	width: 100%;
	top: -600px;
	z-index: -10000;
}
#greySplitTop {
	position: relative;
	width: 100%;
	height: 500px;
	
	background-color: rgb(200, 200, 200);
	transform: skew(0deg, 5deg);
}
#greySplitMiddle {
	position: relative;
	width: 100%;
	background-color: rgb(200, 200, 200);
}
#greySplitBottom {
	position: relative;
	width: 100%;
	height: 500px;
	background-color: rgb(200, 200, 200);
	transform: skew(0deg, -5deg);
}


#redParent {
	position: relative;
	width: 100%;
	z-index: -10000;
}
#redSplitBottom {
	position: relative;
	width: 100%;
	height: 500px;
	
	background-color: rgb(216, 191, 216);
	transform: skew(0deg, 5deg);
}
#redSplitMiddle {
	position: relative;
	width: 100%;
	background-color: rgb(216, 191, 216);
}
#redSplitTop {
	position: relative;
	width: 100%;
	height: 500px;
	background-color: rgb(216, 191, 216);
	transform: skew(0deg, -5deg);
}

</style>
