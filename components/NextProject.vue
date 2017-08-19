<template>
  <nav class="container next-project">
    <a :href="url">
      <div>
        <span class="next-project--label">Next Project</span>
        <h1><slot></slot></h1>
      </div>
      <svg version="1.1" id="svg-arrow" class="next-project--arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 22" xml:space="preserve">
        <polygon points="19.6,1.4 26.2,8 0,8 0,10 26.2,10 19.6,16.6 21,18 30,9 21,0 "/>
      </svg>
    </a>
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
  .next-project {
    overflow: hidden;
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
  h1 {
    margin: 0;
  }
  .next-project--label {
    display: block;
    color: $meta-color;
    font-family: $font_head;
    font-size: 0.8em;
    margin-left: 0.1em;
    text-transform: uppercase;
  }
  .next-project--arrow {
    fill: $primary;
    width: 2.5em;
    transition: transform 0.3s cubic-bezier(0,.57,.82,1.68);
    transform: translate(0, 0.2em)
  }
  a:hover .next-project--arrow {
    transform: translate(15px, 0.2em);
  }
</style>
