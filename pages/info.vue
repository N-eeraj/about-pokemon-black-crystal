<script setup>
import data from '@data/info.json'

useMeta('Info')
</script>

<template>
  <div class="info-container">
    <div
      v-for="({image, texts}, index) in data"
      :key="index"
      class="info-item">

      <img :src="image" />

      <div class="text-container">
        <p
          v-for="(text, subIndex) in texts"
          :key="`${index}.${subIndex}`">
          {{ text }}
        </p>
      </div>

    </div>
  </div>
</template>

<style
  src="@styles/pages/info.scss"
  lang="scss"
  scoped>
</style>