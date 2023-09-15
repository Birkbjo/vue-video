<script setup lang="ts">
import SimpleButton from './SimpleButton.vue'
import IconUpload from './icons/IconUpload.vue'
import { computed, ref } from 'vue'

type VideoEvent = Event & {
  target: HTMLVideoElement
}

const fileInputRef = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    selectedFile.value = input.files[0]
  }
}

const handleLoadedVideo = (event: Event) => {
  ;(event as VideoEvent).target.scrollIntoView({
    behavior: 'smooth'
  })
}

const videoSrc = computed(() => {
  return selectedFile.value ? URL.createObjectURL(selectedFile.value) : null
})
</script>

<template>
  <div class="uploadWrapper">
    <p>Trykk på knappen nedenfor for å laste opp en {{ selectedFile && 'ny' }} video</p>
    <input
      type="file"
      ref="fileInputRef"
      @change="handleFileChange"
      style="display: none"
      accept="video/*"
    />
    <SimpleButton
      class="uploadButton"
      :label="`Last opp ${selectedFile ? 'ny' : ''} video`"
      @click="triggerFileInput"
    >
      <template #icon><IconUpload /></template>
    </SimpleButton>
    <template v-if="selectedFile && videoSrc">
      <div>
        Fil: {{ selectedFile.name }}
        <SimpleButton label="X" @click="selectedFile = null" small class="deleteVideoButton" />
      </div>
      <video
        :src="videoSrc"
        type="video/mp4"
        controls
        autoplay
        @loadeddata="handleLoadedVideo"
      ></video>
    </template>
    <div class="video-wrapper"></div>
  </div>
</template>

<style scoped>
.uploadWrapper {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 14px;
}
.uploadButton {
  margin: 16px 0px;
}

.deleteVideoButton {
  background-color: rgba(0, 0, 0, 0);
}
.videoWrapper {
  max-width: 500px;
  max-height: 200px;
}
</style>
