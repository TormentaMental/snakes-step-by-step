<template>
  <div class="snake">
    <Block :position="position"
           :color="color"
           :size="size">
    </Block>
  </div>
</template>

<script>
import Block from "./Block";

export default {
  name: "Snake",
  props: ['position', 'size', 'color'],
  components: {
    Block
  }
}
</script>
