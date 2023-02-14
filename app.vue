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

<style>

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
		animation: background-pan 10s ease infinite;
		background: linear-gradient(to right, var(--g1), var(--g2), var(--g1));
	}
</style>