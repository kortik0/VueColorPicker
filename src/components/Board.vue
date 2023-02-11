<template>
  <div id="board">
    <div class="flexbox">
      <div class="answer">
        <Card :color="preInitColor"/>
      </div>
      <div>
        <Card @click="verify" v-for="n in 4" :key="n" :color="this.colors[n]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import {generateRGB, generateSimilarRGB, parseRGB} from "../ mixed/RGBgenerator";

export default {
  name: "Board",
  data() {
    return {
      preInitColor: "",
      colors: []
    }
  },
  mounted() {
    this.preInitColor = generateRGB()
    this.colors = generateSimilarRGB(this.preInitColor)
  },
  methods: {
    verify(event) {
      if (event.currentTarget.style.cssText) {
        console.log(parseRGB(event.currentTarget.style.cssText, true))
      }
    }
  },
  components: {Card}
}
</script>

<style scoped>
.answer {
  justify-content: center;
}

.flexbox > * {
  display: flex;
  flex-wrap: wrap;
}

#board {
  position: relative;
  margin: 0 auto;
  width: 80vw;
  min-height: 100vh;
  background: #2c3e50;
}
</style>