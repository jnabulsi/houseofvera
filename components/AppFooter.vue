<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- LinkedIn Icon -->
      <a href="https://www.linkedin.com/in/tess-salinger-b865972b9/" target="_blank" rel="noopener noreferrer"
        class="icon-link">
        <img src="/img/linkedin.png" alt="LinkedIn" class="icon" />
      </a>

      <!-- YouTube Icon -->
      <a href="https://www.youtube.com/channel/UCmobJQ0i_DJEEEKBqYTpfiQ" target="_blank" rel="noopener noreferrer"
        class="icon-link">
        <img src="/img/youtube.png" alt="YouTube" class="icon" />
      </a>

      <!-- Instagram Icon -->
      <a href="https://www.instagram.com/thisismyperception/?hl=en" target="_blank" rel="noopener noreferrer"
        class="icon-link">
        <img src="/img/instagram.png" alt="Instagram" class="icon" />
      </a>

      <!-- Vimeo Icon -->
      <a href="https://vimeo.com/user54674996" target="_blank" rel="noopener noreferrer" class="icon-link">
        <img src="/img/vimeo.png" alt="Vimeo" class="icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  /* background-color: #FFDD95;*/
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.icon-link {
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.icon-link:hover {
  transform: scale(1.1);
  /* Slightly enlarge icons on hover */
  opacity: 0.8;
  /* Slightly fade icons on hover */
}

.icon {
  width: 32px;
  /* Adjust icon size as needed */
  height: 32px;
}
</style>
