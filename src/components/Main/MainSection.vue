<script setup>
// import PMain from './components/PMain.vue'
import ManuscriptIndex from '@/components/ManuscriptIndex.vue'
// import ScrollPaper from '@/components/scroll/ScrollPaper.vue'
// import ScrollPaper from './components/scroll/ScrollPaper.vue'

import { ref } from 'vue'
import PaperComponent from './PaperComponent.vue'
import PMain from '../PMain.vue'
import AboutSection from '../data/AboutSection.vue'
import WorkSection from '../data/WorkSection.vue'

const visiblePaper = ref('')

const showPaper = (something) => {
  visiblePaper.value = something
}

const hidePaper = () => {
  visiblePaper.value = ''
}
</script>

<template>
  <div class="main-section">
    <PMain />
    <!-- <ScrollPaper /> -->
    <ManuscriptIndex @show="showPaper($event)" />
    <!--
    <transition name="slide">
      <PaperComponent paperName="About" v-if="visiblePaper === 'About'" @hide="hidePaper">
        <AboutSection />
      </PaperComponent>
      <PaperComponent paperName="Work" v-if="visiblePaper === 'Work'" @hide="hidePaper"
        >This is the Work
        <WorkSection />
      </PaperComponent>
      <PaperComponent paperName="Links" v-if="visiblePaper === 'Links'" @hide="hidePaper"
        >This is the Links
      </PaperComponent>
      <PaperComponent paperName="Contact" v-if="visiblePaper === 'Contact'" @hide="hidePaper"
        >This is the Contacts
      </PaperComponent>
    </transition> -->

    <transition name="slide">
      <PaperComponent v-if="visiblePaper" :paperName="visiblePaper" @hide="hidePaper">
        <AboutSection v-if="visiblePaper === 'About'" />
        <WorkSection v-if="visiblePaper === 'Work'" />

        <div v-if="visiblePaper === 'Links'">This is the Links</div>
        <div v-if="visiblePaper === 'Contact'">This is the Contacts</div>
      </PaperComponent>
    </transition>
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

<!-- TODO: we should make 1 paper visible at a time, to avoid stacked paper -->
 <!-- TODO: I scrapped the dragging abitlity, not good here -->
