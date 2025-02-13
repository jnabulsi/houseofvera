<template>
  <div class="design-container">
    <img src="/img/vfx.webp" alt="Design" class="vfx-image" />
    <p class="design-text">
      Over the last few years, I have immersed myself in the world of 3D design, learning tools like
      Maya, Blender, Illustrator, Substance Painter, Photoshop, and Unity. From texturing and modeling to shading and
      sculpting, my aim is to bring digital creations to life. I have explored the exciting realm of game development,
      blending creativity with technical expertise to craft immersive experiences.
    </p>
    <img src="/img/vfxwide.webp" alt="design2" class="design-image" />

    <div class="skills">
      <h1>Skills</h1>
      <ul>
        <li>3d modelling (Maya,Blender, Cinema 4D)</li>
        <li>Texturing (Substance Painter, Photoshop, Illustrator, Blender, and Maya internally)</li>
        <li>UV unwrapping</li>
        <li>Rigging</li>
        <li>Animating</li>
        <li>Weight painting</li>
        <li>Compositing video into 3D software</li>
        <li>Sculpting</li>
        <li>C# code for game object triggers</li>
        <li>Unity game building (lighting, sound, triggers, post-processing, camera integration)</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.design-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

.design-image {
  max-width: 100%;
  height: auto;
  display: block;
}

.design-text {
  font-size: 2rem;
  line-height: 1.6;
  text-align: center;
  margin-top: 70px;
  max-width: 80%;
}

.skills {
  text-align: left;
  width: 80%;
  margin: 40px auto;
}

.skills h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

.skills ul {
  padding-left: 20px;
  color: #3b3d3f;
  font-size: 2rem;
}
</style>
