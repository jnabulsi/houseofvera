<template>
  <div class="project-pane">
    <img :src="imageSrc" alt="Project Image" class="project-image" />
    <div class="text-container">
      <p class="title">{{ title }}</p>
      <p class="info">{{ info }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.project-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 16px;
}

.project-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.text-container {
  text-align: left;
  width: 100%;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
}

.info {
  font-size: 1.2rem;
  font-weight: normal;
  color: #3b3d3f;
}
</style>

