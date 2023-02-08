<template>
	<div class="h-full">
		<MenuBtn @click="toggleMenu"/>

		<transition name="fade" mode="out-in">
			<Menu v-model="menuVisible" />
		</transition>

		<main class="h-full">
			<router-view v-slot="{ Component, route }">
				<transition name="fade-slide" mode="out-in">
					<component :is="Component" :key="route.fullPath" />
				</transition>
			</router-view>
		</main>
	</div>
</template>

<script setup>
import Menu from './components/menu.vue';
import MenuBtn from './components/menuBtn.vue';

import { ref } from 'vue';

const menuVisible = ref(false);

function toggleMenu() {
	menuVisible.value = !menuVisible.value;
}
</script>

