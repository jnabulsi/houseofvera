<template>
  <div class="about-container">
    <img src="/img/about.webp" alt="Tess" class="tess-image" />
    <div class="about-content">
      <p v-for="(paragraph, index) in aboutText" :key="index" class="about-text">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>


<script setup>
const aboutText = [
  "Hey! I’m Tess Salinger, a Digital Designer based in Melbourne/Naarm with a serious love for all things creative. I’m all about finding the magic in everyday moments and turning them into captivating stories through digital design. Whether it's motion graphics, 3D, or interactive experiences, I’m always diving into new tools and platforms to make my ideas come to life.",
  "I’ve spent time perfecting my skills in After Effects, Premiere Pro, Maya, Unity, and Illustrator to just to name a few! I love mixing up these different tools to create something that’s both visually striking and meaningful.",
  "Outside of design, I stay inspired by volunteering at community TV stations, where I get to collaborate on fun projects with other creatives. I’m always learning, growing, and exploring new ways to improve my craft.",
  "Even though I’m still relatively new to the digital design world, I’m excited to make an impact, push boundaries, and bring fresh, innovative designs to life. Let’s make something awesome together!"
];
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;
  padding: 50px 20px;
  max-width: 75%;
}

.tess-image {
  flex: 0.8;
  max-width: 25%;
  height: auto;
  object-fit: contain;
}

/* Text Content Container */
.about-content {
  flex: 3;
  max-width: 70%;
  display: flex;
  flex-direction: column;
}

/* Individual Paragraph Styling */
.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 5px;
  color: #4873b4;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }

  .about-text {
    max-width: 90%;
  }

  .tess-image {
    max-width: 80%;
  }
}
</style>

