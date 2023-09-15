<script setup lang="ts">
defineProps<{
  label: string
  small?: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <button class="simple-button" :class="{ small: small }" @click="$emit('click')">
    <span class="slot-wrapper">
      <span v-if="$slots.icon" class="icon-wrapper">
        <slot name="icon" />
      </span>
      {{ label }}
    </span>
  </button>
</template>

<style scoped>
.simple-button {
  position: relative;
  height: 40px;
  border-radius: 15px;
  font-size: 1.2em;
  font-weight: 500;
  background-color: rgb(236, 99, 67);
  color: white;
  cursor: pointer;
  font-family: inherit;
  text-align: center;
  border: none;
  padding: 12px;
  transition: 0.4s;
}

.simple-button:hover,
:focus {
  background-color: rgb(255, 99, 67);
}

.icon-wrapper {
  margin-top: 3px;
}
.small {
  /* width: 82px; */
  height: 28px;
  font-size: 16px;
  border-radius: 15px;
}

.slot-wrapper {
  display: flex;
  place-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;
}
</style>
