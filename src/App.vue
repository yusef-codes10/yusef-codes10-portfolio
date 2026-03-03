<script setup>
import PHeader from './components/PHeader.vue'
import PFooter from './components/PFooter.vue'
// import PMain from './components/PMain.vue'
import ManuscriptIndex from './components/ManuscriptIndex.vue'
import ScrollPaper from './components/scroll/ScrollPaper.vue'
// import ScrollPaper from './components/scroll/ScrollPaper.vue'

import { ref } from 'vue'

const isOpen = ref(false)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="portfolio">
    <PHeader />
    <!-- <PMain /> -->
    <!-- <ScrollPaper /> -->
    <ManuscriptIndex />
    <ScrollPaper>
      <!-- Scroll paper content -->
      <div class="scroll-paper">
        <div class="scroll-content">
          <h2>Hi, I'm <span>Yusef</span></h2>
          <p>Your friendly Nieghborhood Web Developer</p>

          <div class="buttons">
            <button @click="foldScroll">展開 (Unfold)</button>
            <button @click="foldScroll">巻く (Fold)</button>
          </div>
        </div>
      </div>
    </ScrollPaper>

    <ScrollPaper v-if="isOpen"></ScrollPaper>

    <PFooter />
  </div>
</template>

<style scoped>
/* we need grid lyout for the entire page, to make easier to switch the layout for smaller screens */
.portfolio {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'navbar navbar'
    'scroll manuscript'
    'footer footer';
  grid-template-rows: auto 1fr auto;
}



/* === SCROLL PAPER === */
.scroll-paper {
  position: absolute;
  top: 32px;
  bottom: 32px;
  left: 0;
  right: 0;
  overflow: hidden;

  /* Parchment base */
  background: var(--scroll-color);

  /* Depth and texture */
  box-shadow:
    inset 0 0 18px rgba(255, 240, 200, 0.6),
    inset 0 0 40px rgba(160, 120, 60, 0.45);
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

.buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

button {
  padding: 12px 24px;
  border: 2px solid #3d2817;
  background: #f1d6a4;
  color: #3d2817;
  font-family: 'Klee One', cursive;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background: #c49a6c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

span {
  font-family: var(--font-icons);
}

h2 {
  font-size: clamp(2rem, 5vw + 1rem, 2.6rem);
}
</style>
