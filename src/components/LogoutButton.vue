<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import SimpleButton from './SimpleButton.vue'

const { logout } = useAuth0()

const handleLogout = () =>
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
</script>

<template>
  <SimpleButton @click="handleLogout" label="Logg ut" small />
</template>

<style scoped>
.button {
  background-color: rgb(236, 99, 67);
  color: white;
  border: none;
  font-size: 16px;
  height: 28px;
  width: 82px;
  font-family: inherit;
  font-weight: 500;
  border-radius: 15px;
}
</style>
