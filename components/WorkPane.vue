<template>
  <router-link :to="link" class="work-pane" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="imageSrc" alt="Work Image" class="work-image" />
    <div class="overlay">{{ text }}</div>
  </router-link>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const hover = ref(false);
</script>

<style scoped>
.work-pane {
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  display: block;
  text-decoration: none;
}

.work-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s;
}

.work-pane:hover .work-image {
  filter: brightness(0.7);
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-align: center;
  z-index: 200;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.work-pane:hover .overlay {
  opacity: 1;
}
</style>
