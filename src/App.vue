<template>
  <div id="app">
    <section class="canvas">
      <block :position="snake.position"
             :color="snake.color"
      ></block>
      <block :position="apple.position"
             :color="apple.color"
      ></block>
    </section>
  </div>
</template>

<script>
import Block from './components/Block'

export default {
  name: 'app',
  data: function() {
    return {
      snake: {
        color: 'white',
        position: {
          x: 50,
          y: 50
        }
      },
      apple: {
        color: 'red',
        position: {
          x: 250,
          y: 250
        }
      }
    }
  },
  components: {
    Block
  }
}
</script>

<style>
body {
  background: #1D1E22;
}

.canvas {
  width: 800px;
  height: 450px;
  background: #379452;
  margin: 0 auto;
  position: relative;
}
</style>
