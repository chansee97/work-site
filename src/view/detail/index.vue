<template>
	<div>
	
	<img :src="query.path" :alt="query.label">
	<h2>{{ query.label }}</h2>
	</div>
  
</template>

<script setup>
import { useRoute } from 'vue-router';

const {query} = useRoute()

</script>

<style lang="less" scoped></style>
