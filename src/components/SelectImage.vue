<template>
  <select v-model="lessonPlanContext.selectedImage">
    <option disabled value="">Please select one</option>
    <option v-for="image in availableImages" :value="image" :key="image">
      {{ image }}
    </option>
  </select>
</template>

<script>
import { useImagePickerContext } from "@/composable/image_picker";

export default {
  name: "SelectImage",
  setup() {
    return useImagePickerContext()
  }
}
</script>

<style scoped>

</style>
