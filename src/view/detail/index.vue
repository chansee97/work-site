<template>
	<div class="detail-container">
		<div class="detail-single-img" v-if="!currentWorks.description">
			<img :src="currentWorks.srcPath" />
		</div>
		<div class="detail-description" v-else>
			<div class="detail-description-warp scrollbar">
				<p class="detail-description-content">{{ currentWorks.description }}</p>
			</div>
			<img :src="currentWorks.srcPath" :alt="currentWorks.title" />
		</div>
		<div class="detail-arrow">
			<div class="detail-arrow_left arrow" @click="toggleImage('left')"></div>
			<div class="detail-arrow_right arrow" @click="toggleImage('right')"></div>
		</div>
		<div class="detail-title">{{ currentWorks.wroks }}</div>
		<div class="detail-btn-group">
			<div class="info icon" @click="showInfo = !showInfo" v-if="currentWorks.info">
				<transition name="fade-top">
					<div class="info-content" v-if="showInfo" v-html="currentWorks.info"></div>
				</transition>
			</div>
			<div class="back icon" @click="backWorksCatalog"></div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { worksConfig } from '@/config';

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { works, no } = route.query;
const max = ref(0);
const showInfo = ref(false);

const currentWorks = computed(() => {
	const defaultResult = { works, no };
	const parent = worksConfig[works];
	max.value = parent.max;
	return parent?.children[no] ?? defaultResult;
});

function toggleImage(direction = 'right') {
	const _no = Number(no);
	const noResult = () => {
		if (direction == 'right') {
			return _no + 1 > max.value ? 0 : _no + 1;
		}
		if (direction == 'left') {
			return _no - 1 < 0 ? max.value : _no - 1;
		}
	};
	router.push({ path: '/detail', query: { works: works, no: noResult() } });
}
function backWorksCatalog() {
	router.push({ path: '/catalog', query: { title: works, pageType: 'works' } });
}
</script>

<style lang="less" scoped>
.detail-container {
	height: 100%;
	position: relative;
}
.detail-arrow {
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	padding: 0 7.5vw; //144
	display: flex;
	justify-content: space-between;
	.arrow {
		background-position: center;
		width: 1.67vw; // 32
		height: 5.21vw; // 100
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		&::before{
			content: '';
			position: absolute;
			inset: -100px;
		}
	}
	.detail-arrow_left {
		background: url('@/assets/icon/left-arrow.svg') no-repeat;
		&:hover {
			transform: translateX(-30px);
		}
	}
	.detail-arrow_right {
		background: url('@/assets/icon/right-arrow.svg') no-repeat;
		&:hover {
			transform: translateX(30px);
		}
	}
}
.detail-single-img {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		max-height: 48vw; //972px
	}
}
.detail-description {
	height: 100%;
	display: flex;
	align-items: center;
	gap: 14.32vw;
	padding-left: var(--page-left);
	img {
		max-height: 48vw; //972px
	}

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
	cursor: pointer;
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
	.back {
		background-image: url('@/assets/icon/back.svg');
	}
}
</style>
