<template>
	<div class="btn-menu" @click="handleClick">
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
	width: 36px;
	height: 24px;
	position: fixed;
	cursor: pointer;
	background-image: url('@/assets/icon/menu.svg');
	top: var(--page-top);
	left: var(--page-left);
	z-index: 3;
}

</style>
