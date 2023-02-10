<template>
  <Transition v-show="logged.in" >
  <nav v-if="logged.in" class="fixed z-50 flex md:flex-col text-white">
    <template v-for="option in MenuOptions" :key="option.id">
      <NuxtLink :to="option.id" :class="tailWind">{{option.word}}</NuxtLink>
    </template>
  </nav>
  </Transition>
  <main>
    <slot />
  </main>
</template>

<script setup>
const logged  = useLogged();
const tailWind = "bg hover:bg-black p-2 md:p-3 md:pl-5 font-mukta"
const MenuOptions = [
  {'id':'/#intro', 'word':'Intro'},
  {'id':'/#skillSet', 'word':'Skill Set'},
  {'id':'/#aboutMe', 'word':'About Me'},
  {'id':'/#portfolios', 'word':'Projects'},
  {'id':'/#resume', 'word':'Resume'},
  {'id':'/#contactMe', 'word':'Contact Me'}
]
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1.5s ease;
}

.bg{
  transition: all .5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  position: absolute;
  left: 0;
  transform: translateX(-100%);
}
</style>