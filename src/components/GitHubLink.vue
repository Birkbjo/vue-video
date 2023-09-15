<script setup lang="ts">
import GitHubLogoVue from '../components/icons/GitHubLogo.vue'

const ghLink = __HOMEPAGE__
</script>

<template>
  <a :href="ghLink" target="_blank">
    <GitHubLogoVue />
  </a>
</template>
