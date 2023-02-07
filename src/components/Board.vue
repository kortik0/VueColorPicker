<template>
  <div id="board">
    <p>Hello World</p>
    <div class="flexbox">
      <div class="answer">
        <Card :pre-color="preInitColor"/>
      </div>
      <div>
        <Card @click="verify" v-for="n in 4" :key="n"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import {generateAdvancedRGB} from "../ mixed/RGBgenerator";

export default {
  name: "Board",
  data() {
    return {
      preInitColor: generateAdvancedRGB(),
    }
  },
  methods: {
    verify(event) {
      //TODO: one of component must be the same color as preInitColor and need to write a function which would parse shitty Vue code
      console.log(event.currentTarget.style.cssText)
    }
  },
  components: {Card}
}
</script>

<style scoped>
p {
  font-size: 20px;
  font-weight: bold;
  color: aqua;
  padding-top: 20px;
}

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
  height: 100vh;
  background: #2c3e50;
}
</style>