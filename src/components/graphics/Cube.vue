<template>
  <div class="cube-container">
    <div class="cube">
      <!-- cube -->

      <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 10s infinite linear;
}
@keyframes rotateCube {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  background: var(--color-primary);
  border: 1px solid var(--color-background);
  opacity: 0.5;
}
.face.front {
  transform: translateZ(50px);
}
.face.back {
  transform: rotateY(180deg) translateZ(50px);
}
.face.left {
  transform: rotateY(-90deg) translateZ(50px);
}
.face.right {
  transform: rotateY(90deg) translateZ(50px);
}
.face.top {
  transform: rotateX(90deg) translateZ(50px);
}
.face.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
