<template>
	<div class="h-full">
		<div class="btn-menu" @click="toggleMenu">
			<div class="menu-line"></div>
			<div class="menu-line"></div>
			<div class="menu-line"></div>
		</div>
		<Menu v-model:visible="menuVisible"/>

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

import { ref } from 'vue';

const menuVisible = ref(false);

function toggleMenu() {
	menuVisible.value = !menuVisible.value;
}
</script>

<style scoped lang="less">
.btn-menu {
	width: 48px;
	height: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	cursor: pointer;
	top:120px;
	left:144px;
  z-index: 9;
	.menu-line {
		background-color: var(--text-color);
		width: 100%;
		height: var(--menu-line-height);
	}
}
</style>
