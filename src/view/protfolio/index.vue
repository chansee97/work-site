<template>
	<div class="page-container">
		<h1>{{ title }}</h1>
		<div class="scroll-wrap">
			<div class="img-content">
				<simg v-for="item in catalog" :key="item.id" :src="item.path" :title="item.label" @click="handleDetail(item)" />
			</div>
		</div>
	</div>
</template>

<script setup>
import simg from './components/s-img.vue';
import { useRouter } from 'vue-router';
import { menuConfig } from '@/config/menu';
import { onMounted, ref } from 'vue';

const router = useRouter();
const title = 'Portfolio';

function handleDetail(item) {
	const {label,path} = item
	router.push({
		path: 'detail',
		query: {
			label,path
		},
	});
}

const catalog = ref([]);
function generateCatalog(name) {
	const filterData = menuConfig.filter((item) => item.label === name);
	return filterData[0]?.children;
}

onMounted(() => {
	catalog.value = generateCatalog(title);
});
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
