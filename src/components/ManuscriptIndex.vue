<!-- This is where we going to have the paper that shows the icons -->
<script setup>
import { playClickSound } from '@/sound/click.js'
</script>

<template>
  <div class="kanji">
    <div class="icons">
      <div class="icon-field" @click="playClickSound">我 <span>About</span></div>
      <div class="icon-field" @click="playClickSound">匠 <span>Work</span></div>
      <div class="icon-field" @click="playClickSound">縁 <span>Links</span></div>
      <div class="icon-field" @click="playClickSound">交 <span>Conctact</span></div>
    </div>
    <!-- 我 (one self) 匠 (Craft/Master)
    <br />
    縁 (connections)
    <br />
    交 (interaction) -->
  </div>
</template>

<style scoped>
.kanji {
  /* font-size: 4rem; */
  font-family: 'Yuji Boku', sans-serif;
  grid-area: manuscript;
  border: 3px solid red;
  height: 500px;
  margin: 0.5rem;
  display: flex;
}

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 100%;
  margin: 0.5rem 1rem;
}

.icon-field {
  font-size: 3rem;
  font-family: 'Yuji Boku', sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  /* background-color: seagreen; */

  padding: 12px 24px;
  border: 2px solid #3d2817;
  background: #f1d6a4;
  color: #3d2817;
  /* font-family: 'Klee One', cursive; */
  /* font-size: 14px; */
  /* cursor: pointer; */
  border-radius: 4px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  width: 116px;
  height: 124px;
}

.icon-field:hover {
  background: #c49a6c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.icon-field:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

span {
  font-family: 'Yuji Boku', sans-serif;
  /* display: block; */
  font-size: 1.3rem;
}
</style>
