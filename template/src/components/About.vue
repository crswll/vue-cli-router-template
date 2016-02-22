<template>
  <div class="about">
    <h1>\{{ title }}</h1>
    <p>Random from route.data! \{{ random }}</p>
  </div>
</template>

<script>
  export default {
    route: {
      data({ next }) {
        next({
          random: Math.random()
        })
      }
    },
    data() {
      return {
        title: 'About'
      }
    }
  }
</script>

<style>
  .about h1 {
    color: red;
  }
</style>
