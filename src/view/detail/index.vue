<template>
	<div class="detail-container">
		<div class="detail-description">
			<img :class="{ 'has-des': showDescription }" :src="currentWorks.srcPath" />
		</div>

		<transition name="fade">
			<div class="detail-arrow" v-if="!showDescription">
				<div class="detail-arrow_left arrow" @click="toggleImage('left')"></div>
				<div class="detail-arrow_right arrow" @click="toggleImage('right')"></div>
			</div>
		</transition>

		<div class="detail-title" @mouseout="showDescription = false" @mouseover="showDescription = true">
			<transition name="fade-slide">
				<div class="detail-description-warp scrollbar" v-if="showDescription">
					<p class="detail-description-content">{{ description }}</p>
				</div>
			</transition>
			{{ currentWorks.wroks }}
		</div>

		<div class="detail-btn-group">
			<div class="info icon" @mouseout="showInfo = false" @mouseover="showInfo = true" v-if="currentWorks.info"></div>
			<transition name="fade-top">
				<div class="info-content" v-if="showInfo" v-html="currentWorks.info"></div>
			</transition>
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
const description = ref('');
const showInfo = ref(false);
const showDescription = ref(false);

const currentWorks = computed(() => {
	const defaultResult = { works, no };
	const parent = worksConfig[works];
	max.value = parent.max;
	description.value = parent.description;
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
		&::before {
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
.detail-description {
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	&:has(.detail-description-warp) {
		padding-left: var(--page-left);
	}
	img {
		max-height: 48vw; //972px
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.3s ease-in-out;
		transform-origin: left center;
		&.has-des {
			transform: translate(5.57vw, -50%) scale(0.8);
		}
	}
}
.detail-title {
	position: absolute;
	font-size: 20px;
	bottom: var(--page-bottom);
	left: var(--page-left);
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		inset: -50px;
		z-index: -1;
	}
	.detail-description-warp {
		position: absolute;
		bottom: 50px;
		width: 33.75vw;
		max-height: 31.25vw;
		height: fit-content;
		overflow: auto;
		.detail-description-content {
			font-size: 18px;
			line-height: 3em;
		}
	}
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
	}
	.info-content {
		font-size: 20px;
		line-height: 2em;
		position: absolute;
		left: -11.56vw;
		bottom: calc(100% + 1.88vw);
		width: fit-content;
	}
	.back {
		background-image: url('@/assets/icon/back.svg');
	}
}
</style>
