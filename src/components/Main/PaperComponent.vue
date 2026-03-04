<script setup>
import { defineEmits } from 'vue';

defineEmits(['hide'])
</script>
<template>
  <div class="scroll-paper">
    <div class="x-mark">X</div>
    <slot></slot>
  </div>
</template>
<style scoped>
.paper {
  height: 200px;
  width: 400px;
  background-color: seagreen;
  position: relative;
}

.x-mark {
  position: absolute;
  top: 0px;
  right: 15px;
  font-weight: 900;
  font-size: 2rem;
  cursor: pointer;
  font-family: var(--font-icons);
}

/* === SCROLL PAPER === */
.scroll-paper {
  height: 300px;
  width: 800px;
  position: absolute;
  top: 50px;
  left: 320px;
  overflow: hidden;

  /* Parchment base */
  background: var(--scroll-color);

  /* Depth and texture */
  box-shadow: inset 0 0 18px rgba(255, 240, 200, 0.6), inset 0 0 40px rgba(160, 120, 60, 0.45);
}

/* Side shadows on paper */
.scroll-paper::before,
.scroll-paper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 22px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.scroll-paper::before {
  left: 0;
  background: linear-gradient(to right, rgba(70, 40, 20, 0.85), rgba(0, 0, 0, 0));
}

.scroll-paper::after {
  right: 0;
  background: linear-gradient(to left, rgba(70, 40, 20, 0.85), rgba(0, 0, 0, 0));
}

/* === SCROLL CONTENT === */
.scroll-content {
  height: 100%;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  color: #3d2817;
}

h2 {
  font-size: 28px;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.scroll-content p {
  font-size: 16px;
  text-align: center;
  line-height: 1.6;
  max-width: 280px;
}
</style>