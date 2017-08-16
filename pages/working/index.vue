<template>
  <div></div>
</template>
<script>
  export default {
    asyncData (context) {
      context.redirect(301, '/');
    }
  };
</script>
