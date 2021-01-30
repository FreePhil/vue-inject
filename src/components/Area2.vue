<template>
  <div class="area2">
    <ImageShowRoom></ImageShowRoom>
    <increment-button></increment-button>
  </div>
</template>

<script>
import ImageShowRoom from "@/components/ImageShowRoom";
import IncrementButton from "@/components/IncrementButton";

export default {
  name: "Area2",
  components: {ImageShowRoom, IncrementButton}
}
</script>

<style scoped>

.area2 {
  height: 100%;
  background-color: goldenrod;
}
</style>
