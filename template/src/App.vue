<template>
  <div :class="['app', 'app--' + $route.name]">
    <h1>Vue App</h1>
    <nav>
      <ul>
        <li><a v-link="{ name: 'home', exact: true }">Home</a></li>
        <li><a v-link="{ name: 'about' }">About</a></li>
      </ul>
    </nav>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  export default {
    replace: false
  }
</script>

<style>
  .v-link-active {
    font-weight: bold;
  }

  .fade-transition {
    opacity: 1;
    transition: opacity 0.25s;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
