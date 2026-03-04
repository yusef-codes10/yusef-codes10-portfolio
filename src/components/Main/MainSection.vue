<script setup>
// import PMain from './components/PMain.vue'
import ManuscriptIndex from '@/components/ManuscriptIndex.vue'
// import ScrollPaper from '@/components/scroll/ScrollPaper.vue'
// import ScrollPaper from './components/scroll/ScrollPaper.vue'

import { ref } from 'vue'
import PaperComponent from './PaperComponent.vue'
import PMain from '../PMain.vue'

const currentSection = ref(null)

const setSection = (section) => {
  currentSection.value = section
}
</script>

<template>
  <div class="main-section">
    <PMain />
    <!-- <ScrollPaper /> -->
    <ManuscriptIndex @show="setSection" />

    <PaperComponent >This is the About  </PaperComponent>
    <PaperComponent >This is the Work  </PaperComponent>
    <PaperComponent >This is the Links  </PaperComponent>
    <PaperComponent >This is the Contacts  </PaperComponent>

  </div>
</template>

<style scoped>
.main-section {
  position: relative;
  grid-area: main;
  max-height: 80dvh;
  /* overflow-y: scroll; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'scroll index';
}
</style>