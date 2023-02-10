<template>
  <nav v-if="logged.in" class="fixed z-50">
    <NuxtLink to ="/#resume">Home</NuxtLink>
    <NuxtLink to ="/#resume">Home</NuxtLink>
    <NuxtLink to ="/#resume">Home</NuxtLink>
    <NuxtLink to ="/#resume">Home</NuxtLink>
    <NuxtLink to ="/#resume">Home</NuxtLink>
    <NuxtLink to ="/#resume">Home</NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>

<script setup>
const logged  = useLogged();

</script>