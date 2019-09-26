<template>
  <div id="app">
    <section class="canvas" v-bind:style="{
        width: scene.dimensions.width + 'px',
        height: scene.dimensions.height + 'px'
      }">
      <block :position="snake.position"
             :color="snake.color"
             :size="snake.size"
      ></block>
      <block :position="apple.position"
             :color="apple.color"
             :size="apple.size"
      ></block>
    </section>
  </div>
</template>

<script>
import Block from './components/Block';
import Position from './position';

const config = {
  dimensions: {
    width: 800,
    height: 450
  },
  blockSize: 10
};

export default {
  name: 'app',
  data: function() {
    const { width, height } = config.dimensions;
    const blockSize = config.blockSize;

    return {
      snake: {
        color: 'white',
        position: Position.getRandom(width - blockSize, height - blockSize),
        size: blockSize
      },
      apple: {
        color: 'red',
        position: Position.getRandom(width - blockSize, height - blockSize),
        size: blockSize
      },
      scene: {
        dimensions: config.dimensions
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
  background: #379452;
  margin: 0 auto;
  position: relative;
}
</style>
