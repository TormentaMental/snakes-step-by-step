<template>
  <div class="apple">
    <Block :position="position"
           :color="color"
           :size="size">
    </Block>
  </div>
</template>

<script>
import Block from "./Block";

export default {
  name: "Apple",
  data: () => ({
    color: 'red'
  }),
  props: ['position', 'size'],
  components: {
    Block
  }
}
</script>
