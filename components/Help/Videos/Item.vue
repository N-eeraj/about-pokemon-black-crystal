<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="video-item">
        <video class="video">
        </video>
        <div class="overlay">
            <span class="title">
                {{ title }}
            </span>
        </div>
    </div>
</template>

<style
    src="@styles/components/help/videos/item.scss"
    lang="scss"
    scoped>
</style>