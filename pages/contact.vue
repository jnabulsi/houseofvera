<template>
  <div class="contact-container">
    <img src="/img/center.webp" alt="Home Image" class="home-image" />
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue';
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 150px;
  padding: 50px 20px;
  width: 100%;
  margin-left: calc(-15%);
}

.home-image {
  max-width: 40%;
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  .home-image {
    max-width: 80%;
  }

  ContactForm {
    width: 100%;
    max-width: 500px;
  }
}
</style>

