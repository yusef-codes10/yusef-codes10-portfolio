<!-- This is where we going to have the paper that shows the icons -->
<script setup></script>

<template>
  <div class="kanji">
    <div class="icon-field">我 <span>About</span></div>
    <div class="icon-field">匠 <span>Work</span></div>
    <div class="icon-field">縁 <span>Links</span></div>
    <div class="icon-field">交 <span>Conctact</span></div>
    <!-- 我 (one self) 匠 (Craft/Master)
    <br />
    縁 (connections)
    <br />
    交 (interaction) -->
  </div>
</template>

<style scoped>
.kanji {
  font-size: 4rem;
  font-family: 'Yuji Boku', sans-serif;
  grid-area: manuscript;
  border: 3px solid red;
  height: 500px;
  margin: 0.5rem;
  display: flex;
}

.icon-field {
  font-size: 4rem;
  font-family: 'Yuji Boku', sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: seagreen;
}

span {
  font-family: 'Yuji Boku', sans-serif;
  /* display: block; */
  font-size: 1.3rem;
}
</style>
