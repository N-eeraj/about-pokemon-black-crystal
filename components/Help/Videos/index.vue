<script setup>
import videos from '@data/help/videos'

const currentPlaying = ref(null)

const handlePause = () => {
    currentPlaying.value = null
}

const handlePlay = index => {
    currentPlaying.value = index
}
</script>

<template>
    <div class="video-section">
        <HelpVideosItem
            v-for="({ title, video }, index) in videos"
            :title="title"
            :url="video"
            :play="currentPlaying === index"
            @pause="handlePause"
            @play="handlePlay(index)" />
    </div>    
</template>

<style
    src="@styles/components/help/videos/container.scss"
    lang="scss"
    scoped>
</style>