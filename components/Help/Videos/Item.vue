<script setup>
const props = defineProps({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    play: {
        type: Boolean,
        required: false,
        default: false
    }
})

const emit = defineEmits([
    'pause',
    'play'
])

const video = ref(null)

watch(() => props.play, newValue => {
    if (!newValue)
        video.value.pause()
})

const handleVideoClick = () => {
    if (props.play) {
        emit('pause')
        video.value.pause()
    }
    else {
        emit('play')
        video.value.play()
    }
}
</script>

<template>
    <div
        class="video-item"
        @click="handleVideoClick">
        <video
            ref="video"
            :src="url"
            :autoplay="play"
            class="video" >
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