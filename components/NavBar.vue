<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.path">
        <NuxtLink :to="item.path" exact-active-class="active">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
}

ul {
  display: flex;
  gap: 60px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-size: 48px;
}

a {
  text-decoration: none;
  color: #5272b0;
  transition: color 0.3s ease;
}

a:hover,
a.active {
  color: #2c3e50;
}
</style>
