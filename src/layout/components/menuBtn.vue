<template>
	<div class="btn-menu" @click="handleClick">
		<div class="menu-line"></div>
		<div class="menu-line"></div>
		<div class="menu-line"></div>
	</div>
</template>

<script setup>

const emit = defineEmits(['click'])
function handleClick() {
 emit('click')
}
</script>

<style lang="less" scoped>
.btn-menu {
	width: 48px;
	height: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	cursor: pointer;
	top: var(--page-top);
	left: var(--page-left);
	z-index: 3;
	.menu-line {
		background-color: var(--text-color);
		width: 100%;
		height: var(--menu-line-height);
	}
}

</style>
