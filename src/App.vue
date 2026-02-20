<script setup>
import PHeader from './components/PHeader.vue'
import PFooter from './components/PFooter.vue'
import PMain from './components/PMain.vue'
import ManuscriptIndex from './components/ManuscriptIndex.vue'
</script>

<template>
  <div class="portfolio">
    <PHeader />
    <div class="main-section">
      <PMain />
      <ManuscriptIndex />
    </div>
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
}
</style>
