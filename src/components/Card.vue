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
      color: this.preColor || generateAdvancedRGB([144,209,21])
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

  padding-top: 70px;
  width: 50%;
}
</style>