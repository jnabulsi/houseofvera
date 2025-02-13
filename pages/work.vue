<template>
  <div class="work-page">
    <WorkPane imageSrc="/img/work1.webp" text="VFX & VIDEO EDITING" link="/vfx" />
    <WorkPane imageSrc="/img/work2.webp" text="3D DESIGN & GAME DESIGN" link="/design" />
    <WorkPane imageSrc="/img/work3.webp" text="PHOTOGRAPHY" link="/photography" />
  </div>
</template>

<script setup>
import WorkPane from '~/components/WorkPane.vue';
</script>

<style scoped>
.work-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}
</style>
