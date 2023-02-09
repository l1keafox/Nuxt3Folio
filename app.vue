<template>
	  <IntroAnimation v-model:intro="introDone" @startAnim="triggerAnime"/>
  <Transition>
    <div id="welcome" v-if="!clearIntro" class ="pointer-events-none">
      <LandingPage/>
    </div>
  </Transition>

  <div v-if="introDone" >
    <Background />
    <Intro />
    <Skillset />
    <AboutMe />
    <Portfolios />
    <Resume />
    <ContactMe />
  </div>
</template>

<script setup>
    let introDone = ref(false);
    let clearIntro = ref(false);
    function triggerAnime(){
      clearIntro.value = true;
    }
</script>

<style>

#welcome {
  display: fixed;
  left: 0%;
  top: 0%;
}

:root {
	--g1: rgb(72, 72, 73);
	--g2: rgb(21, 10, 122);
}

@keyframes background-pan {
	from {
		background-position: 0% center;
	}
	to {
		background-position: -200% center;
	}
}
body {
	background-size: 200%;
  overflow-x: hidden;
	animation: background-pan 10s linear infinite;
	background: linear-gradient(to right, var(--g1), var(--g2), var(--g1));
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
