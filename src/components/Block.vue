<template>
  <div class="block"      
    v-bind:style="{ 
      top: position.y + 'px', 
      left: position.x + 'px',
      background: color
    }">
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ['position', 'color']
}
</script>

<style scoped>
.block {  
  position: absolute;
  width: 20px;
  height: 20px;
}
</style>