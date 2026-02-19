<script setup></script>

<template>
  <!-- <h1>You did it!</h1> -->
  <div class="scene">
    <div class="container-scroll">
      <!-- Top cylinder rod -->
      <div class="scroll-rod top">
        <div class="rod-end left"></div>
        <div class="rod-cylinder"></div>
        <div class="rod-end right"></div>
      </div>

      <!-- Scroll paper content -->
      <div class="scroll-paper">
        <div class="scroll-content">
          <h2>秘伝の巻物</h2>
          <p>Ancient wisdom lies within this sacred scroll...</p>

          <div class="buttons">
            <button>展開 (Unfold)</button>
            <button>巻く (Fold)</button>
          </div>
        </div>
      </div>

      <!-- Bottom cylinder rod -->
      <div class="scroll-rod bottom">
        <div class="rod-end left"></div>
        <div class="rod-cylinder"></div>
        <div class="rod-end right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
