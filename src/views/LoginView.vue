<script setup lang="ts">
import GitHubLogoVue from '../components/icons/GitHubLogo.vue'
import LoginButton from '../components/LoginButton.vue'
import GitHubLink from '../components/GitHubLink.vue';

const ghLink = __HOMEPAGE__
</script>

<template>
  <main>
    <div class="wrapper">
      <h1>Velkommen!</h1>
      <LoginButton />
    </div>
  </main>
  <div class="footer">
    <GitHubLink />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  margin: 14px;
  gap: 2em;
  margin-top: 5em;
}

.footer {
  display: flex;
  place-content: center;
  margin: 200px auto;
  cursor: pointer;
}
</style>
