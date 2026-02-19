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

<style scoped>
.scene {
  perspective: 1000px;
}

.container-scroll {
  width: 420px;
  height: 520px;
  position: relative;
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* === SCROLL RODS (CYLINDERS) === */
.scroll-rod {
  position: absolute;
  left: 0;
  right: 0;
  height: 32px;
  display: flex;
  align-items: center;
  z-index: 10;
}

.scroll-rod.top {
  top: 0;
}

.scroll-rod.bottom {
  bottom: 0;
}

/* Rod ends (decorative caps) */
.rod-end {
  width: 16px;
  height: 32px;
  background: linear-gradient(to right, #3d2817, #5a3d25, #3d2817);
  /* border-radius: 8px; */
  position: relative;
  box-shadow:
    inset 2px 0 4px rgba(0, 0, 0, 0.5),
    inset -2px 0 4px rgba(0, 0, 0, 0.3);
}

/* .rod-end.left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.rod-end.right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
} */

/* Main cylinder body */
.rod-cylinder {
  flex: 1;
  height: 32px;
  position: relative;
  background: linear-gradient(
    to bottom,
    #2a1810 0%,
    #3d2817 5%,
    #6b4423 15%,
    #8b5a2b 25%,
    #a67c52 40%,
    #c49a6c 50%,
    #a67c52 60%,
    #8b5a2b 75%,
    #6b4423 85%,
    #3d2817 95%,
    #2a1810 100%
  );
  box-shadow:
    inset 0 3px 8px rgba(255, 255, 255, 0.3),
    inset 0 -3px 8px rgba(0, 0, 0, 0.6),
    0 4px 12px rgba(0, 0, 0, 0.5);
}

/* Wood grain texture effect */
.rod-cylinder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.08) 3px,
    rgba(0, 0, 0, 0.08) 4px
  );
  opacity: 0.6;
}

/* Highlight on cylinder */
.rod-cylinder::after {
  content: '';
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
  filter: blur(2px);
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

.scroll-content h2 {
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

/* === FOLDED STATE === */
.container-scroll.folded {
  height: 120px;
}

.container-scroll.folded .scroll-paper {
  opacity: 0.3;
}

/* === ANIMATIONS === */
@keyframes unfold {
  from {
    height: 120px;
  }
  to {
    height: 520px;
  }
}

@keyframes fold {
  from {
    height: 520px;
  }
  to {
    height: 120px;
  }
}
</style>
