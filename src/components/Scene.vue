<template>
  <section class="canvas" v-bind:style="{
        width: dimensions.width + 'px',
        height: dimensions.height + 'px'
      }">

    <Snake :position="snake.position"
           :color="snake.color"
           :size="snake.size"
    ></Snake>

    <Apple :position="apple.position"
           :size="apple.size"></Apple>
  </section>
</template>

<script>
  import Snake from './Snake';
  import Apple from './Apple';
  import Position from "../services/position";

  export default {
    name: 'Scene',
    methods: {
      checkCollision() {
        const { position } = this.snake;

        if(position.x < 0 || position.x >= this.dimensions.width ||
          position.y < 0 || position.y >= this.dimensions.height) {

          return true;
        }

        return false;
      },
      checkAppleEaten() {
        const snake = this.snake;
        const apple = this.apple;

        const collides = Position.compare(snake.position, apple.position);
        if(collides) {

          return true;
        }

        return false;
      }
    },
    watch: {
      snake: {
        handler() {
          const collides = this.checkCollision();
          if(collides) {
            this.$emit('wall-collision');
          }

          const wasAppleEaten = this.checkAppleEaten();
          if(wasAppleEaten) {
            this.$emit('apple-eaten');
          }
        },
        deep: true // esto es para que se compare todos los atributos de la snake, que fue pasada por referencia
      }
    },
    props: ['dimensions', 'snake', 'apple'],
    components: {
      Snake,
      Apple
    }
  }
</script>

<style scoped>
.canvas {
  background: #379452;
  margin: 0 auto;
  position: relative;
}
</style>
