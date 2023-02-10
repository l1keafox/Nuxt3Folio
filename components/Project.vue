<template>
  <div >
    <h1 class="text-3xl md:text-7xl font-bold pb-5 text-slate-300">
      {{ project.title }}
    </h1>
    <div
      class="w-9/12 flex h-[34rem] md:h-2/3 bg-blue-400 rounded flex-col md:flex-row">
      <div class="h-[18rem] md:h-[30rem] md:w-1/2">
        <img class="md:h-full rounded" :src="project.img" alt="" />
      </div>
      <div class="flex flex-col items-center justify-around md:w-1/2">
        <p
          class="text-lg md:text-xl h-1/2 flex items-center justify-around p-4">
          {{ project.description }}
        </p>
        <div class="h-1/5 md:h-1/3 w-full flex items-center justify-around">
          <a
            :href="project.repoLink"
            class="bg-red-400 rounded text-lg p-2 border-2 border-blue-300 text-black w-1/3 hover:bg-red-700 hover:scale-105"
            target="_blank">
            Git Repo
          </a>
          <a
            :href="project.deployLink"
            class="bg-green-400 rounded text-lg p-2 border-2 border-blue-300 text-black w-1/3 hover:bg-green-700 hover:scale-105"
            target="_blank">
            Deployed Link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {project} = defineProps({
  project: Object
})
</script>
