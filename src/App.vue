<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="root">
    <Area1></Area1>
    <Area2></Area2>
  </div>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
import { useCounterProvider} from "@/composable/counter";
import { useImagePickerProvider } from "@/composable/image_picker";
import Area1 from "@/components/Area1";
import Area2 from "@/components/Area2";

export default {
  name: 'App',
  components: {
    Area1,
    Area2,
  },
  setup () {
    useCounterProvider(10)
    useImagePickerProvider()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.root {
  display: grid;
  width: 100%;
  height: 300px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
}
</style>
