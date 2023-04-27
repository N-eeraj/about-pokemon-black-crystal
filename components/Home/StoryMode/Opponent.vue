<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <article class="content">
        {{ title }}
        {{ body }}
        {{ image }}
    </article>
</template>

<style
    src="@styles/components/home/story-mode/opponent.scss"
    lang="scss"
    scoped>
</style>