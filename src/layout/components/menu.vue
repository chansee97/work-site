<template>
	<nav class="fixed wh-full p-7xl bg-[#ddd]">
		<div class="flex flex-col gap-5xl">
			<button class="w-20 h-20" @click="toggleMenu">=</button>
			<div class="flex h-xl w-fit" v-if="menuVisible">
				<div class="flex flex-col gap-5xl w-70" >
					<span class="cursor-pointer" v-for="(item, index) in menuConfig" :key="index" @click="handleItem(index)">{{ item.label }}</span>
				</div>
				<div class="flex flex-col gap-5xl w-70 overflow-auto scrollbar" v-if="menuConfig[activeIndex].children">
					<span class="cursor-pointer" v-for="(item,index) in menuConfig[activeIndex].children" :key="index">{{ item.label }}</span>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue';
import {menuConfig} from '@/config/menu'

const menuVisible = ref(false);

function toggleMenu() {
	menuVisible.value = !menuVisible.value;
}

const activeIndex = ref(0)
function handleItem(index) {
	activeIndex.value= index
}
</script>

<style scoped></style>
