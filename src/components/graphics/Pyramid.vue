<template>
  <div class="pyramid-container">
    <div class="pyramid">
      <!-- pyramid -->
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face left"></div>
      <div class="face right"></div>
      <div class="face bottom"></div>
    </div>
  </div>
</template>

<style scoped>
.pyramid-container {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}

.pyramid {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotatePyramid 10s infinite linear;
}

@keyframes rotatePyramid {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.face {
  position: absolute;
  background: var(--color-primary);
  border: 1px solid var(--color-comment);
  opacity: 0.7;
}

/* Triangular faces using clip-path */
.face.front {
  width: 100px;
  height: 87px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: translateZ(29px) rotateX(-30deg);
}

.face.back {
  width: 100px;
  height: 87px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotateY(180deg) translateZ(29px) rotateX(-30deg);
}

.face.left {
  width: 100px;
  height: 87px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotateY(-90deg) translateZ(29px) rotateX(-30deg);
}

.face.right {
  width: 100px;
  height: 87px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotateY(90deg) translateZ(29px) rotateX(-30deg);
}

/* Square bottom face */
.face.bottom {
  width: 58px;
  height: 58px;
  transform: rotateX(-90deg) translateZ(0px);
  left: 21px;
  top: 21px;
}
</style>
