<template>
	<div class="detail-container">
		<div class="detail-single-img" v-if="!detailConfig.description">
			<img :src="detailConfig.srcPath" :alt="detailConfig.title" />
		</div>
		<div class="detail-description" v-else>
			<div class="detail-description-warp scrollbar">
				<p class="detail-description-content">{{ detailConfig.description }}</p>
			</div>
			<img :src="detailConfig.srcPath" :alt="detailConfig.title" />
		</div>
		<div class="detail-title">{{ detailConfig.title }}</div>
		<div class="detail-btn-group">
			<div class="info icon" @click="showInfo = !showInfo" v-if="detailConfig.info">
				<transition name="fade-top">
					<div class="info-content" v-if="showInfo" v-html="detailConfig.info"></div>
				</transition>
			</div>
			<div class="full icon"></div>
		</div>
	</div>
</template>

<script setup>
import { ref ,computed} from 'vue';
import { worksConfig } from '@/config';
import { useGlobalStore } from '@/store';
import { storeToRefs } from 'pinia';
import { route } from 'vue-router';

const { query } = route;
const currentWorks = computed(() => {
	return worksConfig[query.title].children[query.no]
})

const globalStore = useGlobalStore();

const { detailConfig } = storeToRefs(globalStore);

const showInfo = ref(false);
</script>

<style lang="less" scoped>
.detail-container {
	height: 100%;
	position: relative;
}
.detail-single-img {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.detail-description {
	height: 100%;
	display: flex;
	align-items: center;
	gap: 14.32vw;
	padding-left: var(--page-left);

	.detail-description-warp {
		width: 33.75vw;
		max-height: 31.25vw;
		height: fit-content;
		overflow: auto;
	}
	.detail-description-content {
		font-size: 18px;
		line-height: 3em;
	}
}
.detail-title {
	position: absolute;
	font-size: 20px;
	bottom: var(--page-bottom);
	left: var(--page-left);
}
.detail-btn-group {
	position: absolute;
	bottom: var(--page-bottom);
	right: var(--page-right);
	display: flex;
	gap: var(--icon-size);
	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
		background-size: 100% 100%;
		cursor: pointer;
	}
	.info {
		background-image: url('@/assets/icon/info.svg');
		position: relative;
		.info-content {
			font-size: 20px;
			line-height: 2em;
			position: absolute;
			left: -11.56vw;
			bottom: calc(100% + 1.88vw);
			width: fit-content;
		}
	}
	.full {
		background-image: url('@/assets/icon/full.svg');
	}
}
</style>
