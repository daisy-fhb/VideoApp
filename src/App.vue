<template>
  <div id="app">
    <DaisyVideoPlayer_Component/>
  </div>
</template>

<script>
import DaisyVideoPlayer_Component from './components/DaisyVideoPlayer_Component'

export default {
  name: 'app',
  components: {
    DaisyVideoPlayer_Component
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
