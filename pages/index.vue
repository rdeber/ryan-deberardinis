<!-- pages/index.vue -->

<template>
  <section class="section">
    <transition name="fade">
      <svg version="1.1" id="my-name" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 62">
        <symbol id="s-text">
          <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%">
            <tspan alignment-baseline="middle">R</tspan>
            <tspan alignment-baseline="middle">Y</tspan>
            <tspan alignment-baseline="middle">A</tspan>
            <tspan alignment-baseline="middle">N</tspan>
            <tspan alignment-baseline="middle">D</tspan>
            <tspan alignment-baseline="middle">e</tspan>
            <tspan alignment-baseline="middle">B</tspan>
            <tspan alignment-baseline="middle">E</tspan>
            <tspan alignment-baseline="middle">R</tspan>
            <tspan alignment-baseline="middle">A</tspan>
            <tspan alignment-baseline="middle">R</tspan>
            <tspan alignment-baseline="middle">D</tspan>
            <tspan alignment-baseline="middle">I</tspan>
            <tspan alignment-baseline="middle">N</tspan>
            <tspan alignment-baseline="middle">I</tspan>
            <tspan alignment-baseline="middle">S</tspan>
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
        </g>
        <text class="text-copy-solid" dominant-baseline="central" text-anchor="middle" x="50%" y="50%">
          <tspan alignment-baseline="middle">R</tspan>
          <tspan alignment-baseline="middle">Y</tspan>
          <tspan alignment-baseline="middle">A</tspan>
          <tspan alignment-baseline="middle">N</tspan>
          <tspan alignment-baseline="middle">D</tspan>
          <tspan alignment-baseline="middle">e</tspan>
          <tspan alignment-baseline="middle">B</tspan>
          <tspan alignment-baseline="middle">E</tspan>
          <tspan alignment-baseline="middle">R</tspan>
          <tspan alignment-baseline="middle">A</tspan>
          <tspan alignment-baseline="middle">R</tspan>
          <tspan alignment-baseline="middle">D</tspan>
          <tspan alignment-baseline="middle">I</tspan>
          <tspan alignment-baseline="middle">N</tspan>
          <tspan alignment-baseline="middle">I</tspan>
          <tspan alignment-baseline="middle">S</tspan>
        </text>
      </svg>
    </transition>
    <h2>
      <span class="designer animated fadeIn">Designer </span>
      <span class="plus animated fadeIn">+</span>
      <span class="developer animated fadeIn"> Developer </span>
      <span class="plus animated fadeIn">+</span>
      <span class="photographer animated fadeIn"> Photographer</span>
    </h2>
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
  letter-spacing: -.075rem;

  @include breakpoint(tablet) {
    max-width: 61vw;
  }
}

$colors: $secondary-color,
         shade($secondary-color, 20%),
         shade($secondary-color, 40%),
         shade($secondary-color, 60%),
         shade($secondary-color, 80%);
$max: length($colors);
$stroke-step: 7%;
$stroke-duration: 4s;

.text-copy {
  fill: none;
  stroke-dasharray: $stroke-step $stroke-step * ($max - 1);
  stroke-width: 3px;
  stroke-linecap: round;
  animation: stroke-offset $stroke-duration linear forwards;
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
    stroke-dasharray: 0% $stroke-step * $max*2.5;
  }
}


.text-copy-solid {
  //$fill-duration: $stroke-duration - 2;
  @function fill-duration-delay($pxsize) {
      @return $stroke-duration - 2 + $pxsize;
  }
  tspan {
    fill: rgba(255,255,255,0);
    animation: fade-name .5s linear forwards;

    &:nth-child(1) {
      animation-delay: fill-duration-delay(.3); //R
    }
    &:nth-child(2) {
      animation-delay: fill-duration-delay(.5); //Y
    }
    &:nth-child(3) {
      animation-delay: fill-duration-delay(.4); //A
    }
    &:nth-child(4) {
      animation-delay: fill-duration-delay(0); //N
    }
    &:nth-child(5) {
      animation-delay: fill-duration-delay(.8); //D
    }
    &:nth-child(6) {
      animation-delay: fill-duration-delay(.6); //e
    }
    &:nth-child(7) {
      animation-delay: fill-duration-delay(.7); //B
    }
    &:nth-child(8) {
      animation-delay: fill-duration-delay(.1); //E
    }
    &:nth-child(9) {
      animation-delay: fill-duration-delay(.3); //R
    }
    &:nth-child(10) {
      animation-delay: fill-duration-delay(.4); //A
    }
    &:nth-child(11) {
      animation-delay: fill-duration-delay(.3); //R
    }
    &:nth-child(12) {
      animation-delay: fill-duration-delay(.8); //D
    }
    &:nth-child(13) {
      animation-delay: fill-duration-delay(.9); //I
    }
    &:nth-child(14) {
      animation-delay: fill-duration-delay(0); //N
    }
    &:nth-child(15) {
      animation-delay: fill-duration-delay(.9); //I
    }
    &:nth-child(16) {
      animation-delay: fill-duration-delay(.2); //S
    }
  }
}

@keyframes fade-name {
  100% {
    fill: $header-color;
  }
}

h2 {
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 300;
  margin-bottom: 21vh;

  @include breakpoint(tablet) {
    font-size: 3vw;
  }

  span {
    font-size: 1.25rem;
    @include breakpoint(tablet) {
      font-size: 2.5vw;
    }

    &.plus {
      font-weight: bold;
    }

    // Animation delay iteration.
    @for $i from 1 to 6 {
      &:nth-child(#{$i}) { animation-delay: 3500ms + ($i * 100)}
    }
  }
}

</style>