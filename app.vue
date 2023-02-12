<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import { useTitle } from '@vueuse/core'
const title = useTitle()
title.value = 'Raymond Lewis'
</script>