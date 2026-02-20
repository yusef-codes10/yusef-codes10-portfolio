<script setup></script>

<template>
  <footer>
    <div class="icons">
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      <a href="https://github.com/yusef-codes10" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
    <div class="rights">&copy;2026 Yusef Codes 10</div>
  </footer>
</template>

<style scoped>
footer {
  grid-area: footer;
  /* position: fixed;
  bottom: 0; */
  width: 100%;
  height: 10dvh;
  background: var(--dark-brown);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1.3rem; */
}

.rights {
  color: var(--font-color);
  font-size: 0.7rem;
}

.icons {
  display: inline-flex;
  gap: 1.3rem;
}

i {
  font-size: 1.8rem;
  color: var(--font-color);
  cursor: pointer;
}
</style>
