<script setup lang="ts">
import LogoutButton from '../components/LogoutButton.vue'
import UploadVideo from '../components/UploadVideo.vue'
import { useAuth0 } from '@auth0/auth0-vue'
import { unref } from 'vue'
import GitHubLink from '@/components/GitHubLink.vue'

const name = unref(useAuth0().user)?.name
</script>

<template>
  <main>
    <nav>
      <GitHubLink class="gh-logo" />
      <LogoutButton />
    </nav>
    <div class="welcome-wrapper">
      <h1>Velkommen,</h1>
      {{ name }}
    </div>
    <UploadVideo />
  </main>
</template>

<style scoped>
.welcome-wrapper {
  display: flex;
  place-items: center;
  place-content: center;
  flex-direction: column;
}

nav {
  display: flex;
  place-content: flex-end;
  place-items: center;
  margin: 14px;
}

.gh-logo {
  cursor: pointer;
  transform: scale(0.4);
}
</style>
