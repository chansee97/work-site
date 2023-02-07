<template>
  <div class="h-full">
    <Menu />
    <main class="h-full">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>

  </div>
</template>

<script setup>
import Menu from './components/menu.vue'
</script>

<style scoped>

</style>