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

    <!-- <ScrollPaper v-if="currentSection === 'about'">
      about 
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, magni! Adipisci soluta enim, mollitia impedit quia aut consequatur aliquam, asperiores facilis veniam earum, culpa consectetur distinctio suscipit magnam fugiat recusandae.
    </ScrollPaper>
    <ScrollPaper v-if="currentSection === 'work'">
      work
    </ScrollPaper>
    <ScrollPaper v-if="currentSection === 'links'">
      links
    </ScrollPaper>
    <ScrollPaper v-if="currentSection === 'contact'">
      contct
    </ScrollPaper> -->

    <PaperComponent />
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