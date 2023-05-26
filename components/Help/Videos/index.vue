<script setup>
import videos from '@data/help/videos'
</script>

<template>
    <div class="video-section">
        <HelpVideosItem
            v-for="({ title }) in videos"
            :title="title" />
    </div>    
</template>

<style
    src="@styles/components/help/videos/container.scss"
    lang="scss"
    scoped>
</style>