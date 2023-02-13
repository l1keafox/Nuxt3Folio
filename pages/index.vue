<template>
  
  <IntroAnimation v-model:intro="introDone" @startAnim="triggerAnime"/>

<Transition>
  <div id="welcome" v-if="!clearIntro" class ="pointer-events-none overflow-x-hidden">
    <LandingPage/>
  </div>
</Transition>

<div v-if="logged.in" >
  <Background />
  <div id="intro" class="absolute top-1"> </div>
  <Intro                      class="top-[5rem]   md:top-[13rem]" />
  <Skillset id="skillSet"     class="top-[40rem]  md:top-[43rem]  lg:top-[43rem]"/>
  <AboutMe id="aboutMe"       class="top-[58rem]  md:top-[64rem]  lg:top-[62rem]  xl:top-[70rem]"/>
  <Portfolios id="portfolios" class="top-[168rem] md:top-[145rem] lg:top-[132rem]"/>
  <MessageMe                  class="top-[222rem] md:top-[225rem] lg:top-[202rem]  xl:top-[202rem]"/>
  <Resume id="resume"         class="top-[260rem] md:top-[280rem] lg:top-[250rem] "/>
  <ContactMe id="contactMe"   class="top-[312rem] md:top-[370rem] lg:top-[340rem]"/>
</div>
</template>

<script setup>
  const logged  = useLogged();
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
  animation: background-pan 1s linear infinite;
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
html {
  scroll-behavior: smooth;
}
</style>
