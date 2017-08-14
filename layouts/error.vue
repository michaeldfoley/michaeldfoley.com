<template>
  <div class="container">
    <div>
      <h1 class="Landscape__Title">
        {{ error.statusCode }}
      </h1>
      <h2 class="Landscape__SubTitle">
        {{ error.message }}
      </h2>
      <nuxt-link v-if="error.statusCode === 404" exact to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    head: {
      title: 'Error'
    }
  };
</script>

<style scoped>
  .container {
    margin: 0 10px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
