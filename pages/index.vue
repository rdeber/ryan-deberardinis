<!-- pages/index.vue -->

<template>
  <section class="section is-large">
    <transition name="fade">
      <svg viewBox="0 0 500 62" xmlns="http://www.w3.org/2000/svg">
        <symbol id="s-text">
          <text text-anchor="middle" alignment-baseline="middle" x="50%" y="50%">
            RYAN DeBERARDINIS
          </text>
        </symbol>
        <g class="g-ants">
          <use xlink:href="#s-text"
            class="text-copy">
          </use>
          <use xlink:href="#s-text"
            class="text-copy">
          </use>
          <use xlink:href="#s-text"
            class="text-copy">
          </use>
          <use xlink:href="#s-text"
            class="text-copy">
          </use>
          <use xlink:href="#s-text"
            class="text-copy">
          </use>
          <use xlink:href="#s-text"
            class="text-copy-solid">
          </use>
        </g>
      </svg>
    </transition>
    <h2>Designer + Developer + Photographer</h2>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/_mixins.scss";

section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

svg {
  font-weight: 800;
  font-size: 3rem;
}

$colors: #E85B6F, shade(#E85B6F, 20%), shade(#E85B6F, 40%), shade(#E85B6F, 60%), shade(#E85B6F, 80%);
$max: length($colors);
$stroke-step: 7%;

.text-copy {
  fill: none;
  stroke-dasharray: $stroke-step $stroke-step * ($max - 1);
  stroke-width: 5px;
  animation: stroke-offset 5s linear forwards;
  animation-direction: reverse;

  @for $item from 1 through $max {
    $stroke-color: nth($colors, $item);

    &:nth-child(#{$item}) {
      stroke: $stroke-color;
      stroke-dashoffset: $stroke-step * $item;
    }
  }
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: $stroke-step * $max;
    stroke-dasharray: 0 $stroke-step * $max*2.5;
  }
}
@keyframes stroke-offset-out {
  100% {
    stroke-dashoffset: $stroke-step * $max;
    stroke-dasharray: 0 $stroke-step * $max*2.5;
  }
}



.text-copy-solid {
  fill: #fff;
  animation: fade-name 1s linear 4s forwards;
}

@keyframes fade-name {
  100% {
    fill: $header-color;
  }
}

h2 {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 21vh;
}

</style>