<template>
	<Transition v-show="showAnime" >
		<div id="backGround" class="overflow-hidden">
			<div id="blueSplit" class="overflow-hidden"></div>

		<div id="greyParent">
			<div id="greySplitTop" class="md:top-[100px]"></div>
			<div id="greySplitMiddle" class="top-[-120px] h-[700px] md:h-[500px]"></div>
			<div id="greySplitBottom" class="top-[-150px] md:top-[-500px]"></div>
		</div>
		<div id="blackSplit" class="md:h-[92rem] h-[85rem]"></div>
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
	top: 80px;
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
	
	background-color: rgb(226, 226, 226);
	transform: skew(0deg, 5deg);
}
#greySplitMiddle {
	position: relative;
	width: 100%;
	background-color: rgb(226, 226, 226);
}
#greySplitBottom {
	position: relative;
	width: 100%;
	height: 500px;
	background-color: rgb(226, 226, 226);
	transform: skew(0deg, -5deg);
}

</style>
