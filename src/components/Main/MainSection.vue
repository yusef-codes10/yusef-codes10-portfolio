<script setup>
// import PMain from './components/PMain.vue'
import ManuscriptIndex from '@/components/ManuscriptIndex.vue'
// import ScrollPaper from '@/components/scroll/ScrollPaper.vue'
// import ScrollPaper from './components/scroll/ScrollPaper.vue'

import {  ref } from 'vue'
import PaperComponent from './PaperComponent.vue'
import PMain from '../PMain.vue'


const papersState = ref(
  {
    isAbout: false,
    isWork: false,
    isLinks: false,
    isContact: false,
  }
)

const switchState = (something) => {
  papersState.value[something] = true
  console.log(papersState.value[something]);
}

</script>

<template>
  <div class="main-section">
    <PMain />
    <!-- <ScrollPaper /> -->
    <ManuscriptIndex @show="switchState($event)" />

    <PaperComponent v-if="isAbout" @hide="isAbout=false">This is the About  </PaperComponent>
    <PaperComponent v-if="isWork">This is the Work  </PaperComponent>
    <PaperComponent v-if="isLinks">This is the Links  </PaperComponent>
    <PaperComponent v-if="isContact">This is the Contacts  </PaperComponent>

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