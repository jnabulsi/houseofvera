<template>
  <header class="header">
    <NuxtLink v-if="!isIndexPage" to="/" class="logo-link">
      <img v-if="!isIndexPage" src="/img/logo.webp" alt="Logo" class="logo" />
    </NuxtLink>
    <NavBar />
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '~/components/NavBar.vue';

const route = useRoute();
const isIndexPage = ref(route.path === '/');

watch(route, (newRoute) => {
  isIndexPage.value = newRoute.path === '/';
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
}

.logo-link {
  position: absolute;
  top: 40px;
  left: 60px;
}

.logo {
  width: 200px;
  height: auto;
}
</style>
