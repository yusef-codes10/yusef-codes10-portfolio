<script setup>
// import PMain from './components/PMain.vue'
import ManuscriptIndex from '@/components/ManuscriptIndex.vue'
// import ScrollPaper from '@/components/scroll/ScrollPaper.vue'
// import ScrollPaper from './components/scroll/ScrollPaper.vue'

import {  ref } from 'vue'
import PaperComponent from './PaperComponent.vue'
import PMain from '../PMain.vue'
import AboutSection from '../data/AboutSection.vue'
import WorkSection from '../data/WorkSection.vue'


const papersState = ref(
  {
    About: false,
    Work: false,
    Links: false,
    Contact: false,
  }
)

const switchState = (something) => {
  papersState.value[something] = true
  console.log(papersState.value[something]);
}
// show is working now we need to hide

const hidePaper = (something) => {
  papersState.value[something] = false
}

</script>

<template>
  <div class="main-section">
    <PMain />
    <!-- <ScrollPaper /> -->
    <ManuscriptIndex @show="switchState($event)" />

    <PaperComponent paperName="About" v-if="papersState.About" @hide="hidePaper($event)">
      <AboutSection />
    </PaperComponent>
    <PaperComponent  paperName="Work" v-if="papersState.Work"  @hide="hidePaper($event)">This is the Work
      <WorkSection />  
    </PaperComponent>
    <PaperComponent paperName="Links" v-if="papersState.Links"  @hide="hidePaper($event)">This is the Links  </PaperComponent>
    <PaperComponent paperName="Contact" v-if="papersState.Contact"  @hide="hidePaper($event)">This is the Contacts  </PaperComponent>

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