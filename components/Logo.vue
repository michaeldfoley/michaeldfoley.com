<template>
  <div class="container">
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.4 70" class="logo" aria-labelledby="title" role="presentation">
      <title id="title" lang="en">MF Logo</title>
      <defs>
        <clipPath id="mf">
          <path id="clipm" d="M21.4,32.5V15.2c0-5.7-0.7-8.4-4.4-8.4c-6.3,0-9.2,4.4-9.2,4.4V28l0.6,4.5H2.8v-24L2,3l5.8-0.7v4.5c2.5-2.8,6.8-4.7,10.7-4.7c3.2,0,6.3,1.6,7.4,4.7c2.5-2.8,6.8-4.7,10.7-4.7c4,0,7.9,2.3,7.9,7.1v18.9l0.6,4.4h-5.6V15.2c0-5.7-0.7-8.4-4.4-8.4c-4.8,0-7.7,2.7-8.8,3.9v17.4l0.6,4.4H21.4z"/>
          <path id="clipf" fill="#273A93" d="M69.9,17.4c0,0.9-0.2,1.7-0.6,2.3c-0.5,0.8-1.1,1.1-1.9,1.1c-0.7,0-1.4-0.2-1.9-0.5c-0.6-0.4-0.8-0.9-0.8-1.5c0-0.8,0.3-1.4,1-1.8c-0.7-0.4-1.2-0.5-1.7-0.5c-2.6,0-4.9,1.2-6.9,3.7c-1.6,2-3.2,5.1-4.7,9.3l-1,2.9c-1.7,5.3-3.4,10.6-5.2,15.9c-2.2,6.1-4.6,10.7-7.1,13.7c-3.4,3.9-7.4,5.8-12.1,5.8c-1.9,0-3.6-0.5-5.1-1.5c-1.7-1.1-2.6-2.5-2.6-4.3c0-0.8,0.3-1.6,0.9-2.2c0.6-0.6,1.3-0.9,2.1-0.9c0.7,0,1.3,0.2,1.8,0.7c0.5,0.5,0.8,1,0.8,1.7c0,1.3-0.6,2.2-1.7,2.6c1.9,0.6,3.2,1,3.7,1c3.1,0,5.8-1.7,8-5.2c1.6-2.5,3.4-6.7,5.3-12.4c2.9-8.9,4.5-13.8,4.9-14.9l1.2-2.9c4.5-10.4,10.6-15.7,18.4-15.7c1.3,0,2.5,0.3,3.5,0.8C69.3,15.3,69.9,16.2,69.9,17.4z"/>
          <path id="clipline" d="M57.6,29.6l-1.2,2.9H39.6l1.2-2.9H57.6z"/>
        </clipPath>
      </defs>

      <path id="letterm" fill="none" stroke-width="6" stroke-miterlimit="10" d="M4.8,2.2l0.1,6.1l0.8,24.8c0,0-0.2-22.3,0.1-22.7c2-2.7,17.1-10.6,17.6-1.2l0.7,23.3l0.6-23c0,0,16.9-10.3,17,0.4c0,0,0.1,11.7-0.1,18.5l0.6,4.6l0.6,0l0.3,0.1" clip-path="url(#mf)"/>
      <path id="letterf" fill="none" stroke-width="6.1" stroke-linecap="round" stroke-miterlimit="10" d="M67.3,18.7c0.4-3.1-1.9-3.2-5.8-2.6c-4,0.6-8.5,5.8-10.3,8.8c-0.7,1.1-1.4,2.8-2.1,4.8c-0.3,0.8-0.6,1.7-0.9,2.7c-0.8,2.8-2,5.9-3,9.1c-0.8,2.3-1.9,6-2.9,8.5c0,0-3.1,11.3-8.9,15.6c-4.5,3.5-13-2-11.3-4" clip-path="url(#mf)"/>
      <line id="letterfcross" fill="none" stroke-width="3" stroke-miterlimit="10" x1="39.5" y1="31" x2="57.6" y2="31" clip-path="url(#mf)"/>
    </svg>
    <button @click="$store.commit('toggleNav')" id="navBtn" aria-label="Open Navigation" aria-expanded>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-label="Menu Toggle" role="presentation">
        <line x1="2" x2="48" y1="16" y2="16" class="nav-line" />
        <line x1="2" x2="48" y1="32" y2="32" class="nav-line" />
        <line x1="2" x2="48" y1="48" y2="48" class="nav-line" />
        <line x1="8" x2="40" y1="16" y2="48" class="cross-line" />
        <line x1="8" x2="40" y1="48" y2="16" class="cross-line" />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    color: $text_color;
    position: fixed;
    top: 20px;
    left: 0;
    z-index: 1002;
  }

  .logo {
    height: 50px;
    width: 50px;
    stroke: $text_color;
  }

  button {
    cursor: pointer;
    display: block;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    text-align: left;

    &:focus {
      outline: 0;
    }

    svg {
      stroke: $text_color;
      width: 40px;
      height: 40px;
      top: 0;
      left: 0;
    }
  }

  .cross-line,
  .nav-line {
    transform-origin: 50% 50%;
    transition: all 0.6s ease-in-out;
  }

  .cross-line {
    stroke-width: 0px;
    transform: scale(1.3);
  }
  .nav-line {
    stroke-width: 1px;
  }

  .active {
    .cross-line {
      stroke-width: 1px;
      transform: scale(1);
    }
    .nav-line {
      &:nth-child(1) {
        transform: translateY(-10px) scale(0.01);
      }

      &:nth-child(2) {
        transform: scale(0.01);
      }

      &:nth-child(3) {
        transform: translateY(10px) scale(0.01);
      }
    }
  }
</style>
