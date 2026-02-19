<script setup></script>

<template>
  <footer>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-github"></i>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10dvh;
  background: var(--dark-brown);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
}

i {
  font-size: 1.8rem;
  color: var(--font-color);
  cursor: pointer;
}
</style>
