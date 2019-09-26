<template>
  <div id="app">
    <div class="message">{{message}}</div>
    <Scene
       v-bind:dimensions="scene.dimensions"
       v-bind:snake="snake"
       v-bind:apple="apple"
       v-on:wall-collision="handleCollision"
       v-on:apple-eaten="handleFruitEaten">
    </Scene>
  </div>
</template>

<script>
import Scene from './components/Scene';
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

    const snakePosition = Position.getRandom(width - blockSize, height - blockSize);

    return {
      snake: {
        color: 'white',
        position: snakePosition,
        size: blockSize,
        speed: blockSize
      },
      apple: {
        position: Position.getRandom(width - blockSize, height - blockSize, { except: snakePosition }),
        size: blockSize
      },
      scene: {
        dimensions: config.dimensions
      },
      message: ""
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
    },
    handleCollision() {
      this.message = "Oh no! Game over";
      this.snake.speed = 0;
    },
    handleFruitEaten() {
      this.displayTemporalMessage("Yum!");

      const { width, height } = config.dimensions;
      this.apple.position = Position.getRandom(
        width - this.apple.size,
        height - this.apple.size,
        { except: this.snake.position }
      );
    },
    displayTemporalMessage(message) {
      this.message = message;

      // clear up message if no other message was displayed after
      setTimeout(() => {
        if(this.message === message) {
          this.message = "";
        }
      }, 2000);
    },
  },
  components: {
    Scene
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

body {
  background: #1D1E22;
}

.message {
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 20px;
  width: 800px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding: 0;
  margin: 0 auto;
}
</style>
