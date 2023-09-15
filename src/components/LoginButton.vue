<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import SimpleButton from './SimpleButton.vue';
const { loginWithRedirect } = useAuth0()
const handleLogin = () => {
  loginWithRedirect()
}
</script>

<template>
  <SimpleButton @click="handleLogin" class="hugeButton" label="Logg inn"></SimpleButton>
</template>

<style scoped>

.hugeButton {
  width: 140px;
  height: 80px;
}
</style>
