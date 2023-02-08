<template>
	<nav class="menu-background" v-if="props.modelValue">
		<div class="menu-warp" ref="menuRef">
			<div class="menu-item" v-for="(item, index) in menuConfig" :key="index" @click="handleItemInOne(item, index)">
				{{ item.label }}
			</div>
		</div>
		<div class="menu-lower scrollbar" v-if="activeOneIndex && menuConfig[activeOneIndex].children">
			<div class="menu-warp">
				<div class="menu-item" v-for="(item, index) in menuConfig[activeOneIndex].children" :key="index" @click="handleItemInTwo(item, index)">
					{{ item.label }}
				</div>
			</div>
		</div>
		<div class="menu-lower scrollbar" v-if="menuConfig[activeOneIndex]?.children?.[activeTwoIndex]?.children">
			<div class="menu-warp">
				<div class="menu-item" v-for="(item, index) in menuConfig[activeOneIndex]?.children?.[activeTwoIndex]?.children" :key="index">
					{{ item.label }}
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { menuConfig } from '@/config/menu';
import { useRouter } from 'vue-router';

const router = useRouter();

const activeOneIndex = ref();
function handleItemInOne(item, index) {
	const { isDetail, path, } = item;
	if (path) {
		router.push(path);
		emit('update:modelValue', false);
	}
	activeOneIndex.value = index;
}

const activeTwoIndex = ref();
function handleItemInTwo(item, index) {
	const { isDetail, path } = item;
	if (path) {
		router.push(path);
		emit('update:modelValue', false);
	}
	activeTwoIndex.value = index;
}

const menuRef = ref();
const menuHeight = computed(() => {
	if(!menuRef.value) return 
	return menuRef.value.clientHeight + 'px';
})

const props = defineProps({
	modelValue: Boolean,
});
const emit = defineEmits(['update:modelValue']);
</script>

<style scoped lang="less">
.menu-background {
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	padding-top: calc(var(--page-top) + 5.94vw);
	padding-left: var(--page-left);
	background-color: var(--bg-color);
	z-index: 2;
}
.menu-warp {
	display: flex;
	flex-direction: column;
	gap: var(--menu-item-gap);
	height: fit-content;
	max-height: 100%;
	width: 18.75vw;

	.menu-item {
		cursor: pointer;
		width: fit-content;
		font-size: 20px;
		&:hover,
		&:active,
		&.active {
			color: var(--text-color-active);
		}
	}
}
.menu-lower {
	display: flex;
	align-items: center;
	min-width: fit-content;
	max-height: v-bind(menuHeight);
	overflow: auto;
}
</style>
