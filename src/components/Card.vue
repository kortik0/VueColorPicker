<template>
  <div class="block">
    <div class="roundColor">
    </div>
  </div>
</template>

<script>
import {generateAdvancedRGB} from "../ mixed/RGBgenerator";


export default {
  name: "Card",
  props: ['preColor'],
  data() {
    return {
      color: this.preColor || generateAdvancedRGB([])
    }
  }
}
</script>

<style scoped>
.roundColor {
  width: 30rem;
  height: 10rem;
  background: v-bind(color);
  border-radius: 25px;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 70px;

  width: 50%;
}
</style>