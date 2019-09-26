<template>
  <div class="block"      
    v-bind:style="{ 
      width: size + 'px',
      height: size + 'px',
      top: position.y + 'px', 
      left: position.x + 'px',
      background: color
    }">
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ['position', 'color', 'size']
}
</script>

<style scoped>
.block {  
  position: absolute;
}
</style>