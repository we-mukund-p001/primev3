<template>
  <h1>hello</h1>
  <Chips ref="chipsRef" v-model="chipValues.skill" />



  <div class="flex flex-wrap align-items-center justify-content-center">
    <div class="shadow-2 shadow hover:shadow-8 text-center border-round-sm h-6rem surface-overlay p-3 m-3 flex align-items-center justify-content-center font-bold">shadow-8 on hover</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Chips from 'primevue/chips'; // Ensure you have imported the Chips component if you are using PrimeVue

const chipValues = ref({ skill: [] });
const chipsRef = ref(null);

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the color of the chips
function updateChipColors() {
  const chipsElements = chipsRef.value.$el.querySelectorAll('.p-chips-token');
  chipsElements.forEach(chip => {
    chip.style.color = getRandomColor();
  });
}

// Watcher to detect changes in the chipValues.skill array
watch(
    () => chipValues.value.skill,
    (newVal, oldVal) => {
      if (newVal.length !== oldVal.length) {
        // Change text color on every entry
        updateChipColors();
      }
    },
    { deep: true }
);

// Ensure chips are colored on initial mount
onMounted(() => {
  updateChipColors();
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
