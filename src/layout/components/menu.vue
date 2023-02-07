<template>
	<nav class="menu-background" v-if="props.visible">
		<div class="menu-warp">
			<span class="menu-item" v-for="(item, index) in menuConfig" :key="index" @click="handleItem(index)">{{
				item.label
			}}</span>
		</div>
		<div class="menu-warp scrollbar" v-if="menuConfig[activeIndex].children">
			<div class="menu-children-warp">
				<span class="menu-item" v-for="(item, index) in menuConfig[activeIndex].children" :key="index">{{
					item.label
				}}</span>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue';
import { menuConfig } from '@/config/menu';

const activeIndex = ref(0);
function handleItem(index) {
	activeIndex.value = index;
}

const props = defineProps({
	visible: Boolean,
});
</script>

<style scoped lang="less">
.menu-background {
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	padding: 120px 144px;
	background-color: var(--bg-color);
}
.menu-warp {
	display: flex;
	flex-direction: column;
	gap: var(--menu-item-gap);
	margin-top: calc(var(--menu-item-gap) * 2);
	height: 400px;
	width: 17.5rem;
	overflow: auto;

	&:has(.menu-children-warp) {
		justify-content: center;
	}
	.menu-children-warp {
		display: flex;
		flex-direction: column;
		gap: var(--menu-item-gap);
		min-width: fit-content;
		max-height: 100%;
	}
	.menu-item {
		cursor: pointer;
		&:hover,
		&:active,
		&.active {
			color: var(--text-color-active);
		}
	}
}
</style>
