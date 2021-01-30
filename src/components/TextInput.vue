<template>
<div>
  <increment-button></increment-button>
  <select-image></select-image>
  <h5>Number {{ valueObject.count }}</h5>
  <input v-model="valueObject.text"/>
  <h2>Reflect the text above {{ valueObject.text }}</h2>

</div>
</template>

<script>
import IncrementButton from "@/components/IncrementButton";
import SelectImage from "@/components/SelectImage";
import { useCounterContext } from "@/composable/counter"

export default {
  components: {IncrementButton, SelectImage},
  name: "TextInput",
  setup() {
    return useCounterContext()
  }
}
</script>

<style scoped>

</style>
