<template>
	<div class="page-container">
		<h1>{{ catalogConfig.title }}</h1>
		<div class="scroll-wrap">
			<div class="img-content">
				<simg
					v-for="item in catalogConfig.children"
					:key="item.id"
					:src="item.srcPath"
					:title="item.title"
					@click="handleDetail(item)" />
			</div>
		</div>
	</div>
</template>

<script setup>
import simg from './components/s-img.vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/store';

const { catalogConfig } = useGlobalStore();
const globalStore = useGlobalStore();

const router = useRouter();

function handleDetail(item) {
	globalStore.detailConfig = item;
	router.push('/detail');
}
</script>

<style lang="less" scoped>
.page-container {
	padding-top: var(--page-top);
	padding-left: 20vw;
	height: 100%;
}
.img-content {
	display: flex;
	flex-wrap: wrap;
	gap: var(--row-gap) var(--col-gap);
	width: fit-content;
}

/* 设备宽度大于 320px 小于 640px */
@media all and (min-width: 320px) and (max-width: 640px) {
	.img-content {
		flex-wrap: nowrap;
		flex-direction: column;
	}
	.scroll-wrap {
		overflow: auto;
		height: 70vh;
	}
}
</style>
