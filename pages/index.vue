<template>
  <div class="image-container">
    <img src="/img/logo.webp" alt="Tess" class="tess-image" />
    <img src="/img/center.webp" alt="Home Image" class="home-image" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 50px 20px;
  margin-top: -100px;
}

/* Ensure images scale correctly */
.image-container img {
  flex: 1;
  height: auto;
  object-fit: contain;
}

/* Adjustments for different images */
.tess-image {
  max-width: 45%;
}

.home-image {
  max-width: 35%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .image-container {
    flex-direction: column;
    align-items: center;
  }

  .image-container img {
    max-width: 80%;
  }
}
</style>
