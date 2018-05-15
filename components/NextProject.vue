<template>
  <nav class="container">
    <nuxt-link :to="url">
      <span>
        <span class="label">Next Project</span>
        <span class="h1"><slot></slot></span>
      </span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 22" xml:space="preserve">
        <polygon points="19.6,1.4 26.2,8 0,8 0,10 26.2,10 19.6,16.6 21,18 30,9 21,0 "/>
      </svg>
    </nuxt-link>
  </nav>
</template>
<script>
  export default {
    props: {
      url: String
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    background: #f9f8f8 linear-gradient(0deg, #f9f8f8, #f4f3f3 50%, #fff 50%, #fff 75%, #f9f8f8) 0 200%;
    background-size: 100% 200%;
    overflow: hidden;
    transition: background-position 0.3s ease-out;

    &:hover {
      background-position: 0 100%;
    }
  }
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    max-width: $text-width;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .h1 {
    margin: 0;
  }
  .label {
    display: block;
    color: $meta-color;
    font-family: $font_head;
    font-size: 0.8em;
    margin-left: 0.1em;
    text-transform: uppercase;
  }
  svg {
    fill: $primary;
    width: 2.5em;
    transition: transform 0.3s cubic-bezier(0,.57,.82,1.68);
    transform: translate(0, 0.2em)
  }
  a:hover svg {
    transform: translate(15px, 0.2em);
  }
</style>
