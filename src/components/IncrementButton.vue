<template>
  <span>Click to increment</span>
  <button class="button" @click="increment">
    {{ valueObject.count }}
  </button>
</template>

<script>
import { useCounterContext } from "@/composable/counter";

export default {
  name: "IncrementButton",
  setup() {
    return useCounterContext()
  }
}
</script>

<style scoped>
.button {
  margin: 20px;
}
</style>
