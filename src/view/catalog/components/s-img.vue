<template>
	<div class="s-img-container">
		<img :src="props.src" alt="" />
		<div class="title">{{ props.title }}</div>
	</div>
</template>

<script setup>
const props = defineProps({
	src: String,
	title: String,
});
</script>

<style lang="less" scoped>
.s-img-container {
	width: fit-content;
	cursor: pointer;
	img {
		width: 14.06vw;
		height: 16.67vh;
		object-fit: cover;
		transition: opacity ease .5s;
		will-change: opacity;
	}
	&:hover {
		.title {
			color: var(--text-color-active);
		}
		img {
			opacity: 0.5;
		}
	}
	.title {
		margin-top: 3.52vh;
		text-align: center;
		color: var(--text-color);
	}
}
@media all and (min-width: 320px) and (max-width: 640px) {
	.s-img-container {
		img {
			width: 60vw;
		}
	}
}
</style>
