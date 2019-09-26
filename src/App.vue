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
import Position from './services/position';
import Keyboard from './services/keyboard';

const config = {
  dimensions: {
    width: 800,
    height: 450
  },
  blockSize: 10
};

export default {
  name: 'app',
  created: function() {
    // inicializacion del servicio de teclado
    const onKeyPressed = this.move;
    new Keyboard(onKeyPressed);
  },
  data: function() {
    const { width, height } = config.dimensions;
    const blockSize = config.blockSize;

    return {
      snake: {
        color: 'white',
        position: Position.getRandom(width - blockSize, height - blockSize),
        size: blockSize,
        speed: 10
      },
      apple: {
        color: 'red',
        position: Position.getRandom(width - blockSize, height - blockSize),
        size: blockSize
      },
      scene: {
        dimensions: config.dimensions
      },
    }
  },
  methods: {
    move(keyName) {
      const speed  = this.snake.speed;
      const direction = new Position();

      if(keyName === "up") {
        direction.y -= speed;
      }
      if(keyName === "down") {
        direction.y += speed;
      }
      if(keyName === "left") {
        direction.x -= speed;
      }
      if(keyName === "right") {
        direction.x += speed;
      }

      // reemplazo la posición anterior
      this.snake.position = Position.add(
        this.snake.position,
        direction
      );
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
