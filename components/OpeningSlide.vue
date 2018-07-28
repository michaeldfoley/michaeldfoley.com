<template>
  <aside class="container">
    <section>
      <h1>Michael Foley</h1>
      <ul>
        <li><span>Frontend</span></li>
        <li><span>Email</span></li>
        <li><span>Wordpress</span></li>
      </ul>
    </section>
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.4 70" class="logo" role="presentation" preserveAspectRatio="xMaxYMax" focusable="false">
      <title id="title">MF Logo</title>
      <use xlink:href="#mfLogo" />
    </svg>
  </aside>
</template>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  aside {
    background: #fff;
    display: grid;
    grid-template-rows: 1fr max-content 1fr;
    grid-row-gap: 2rem;
    height: 100vh;
    visibility: hidden;
  }
  h1 {
    font-size: 0.9em;
    line-height: 1.25;
    margin: 0;
    padding-top: 3rem;
    @media screen and (min-width: 40rem) {
      padding-top: 5rem;
    }
  }
  ul {
    display: flex;
    font-size: 1.25em;
    line-height: 1.2;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: block;
  }
  li + li {
    &:before {
      content: '/';
      display: inline-block;
      padding: 0 1.2rem;
    }
  }
  .logo {
    align-self: center;
    justify-self: center;
    stroke: $text-color;
    height: 15rem;
    max-height: 30vh;
  }
</style>
