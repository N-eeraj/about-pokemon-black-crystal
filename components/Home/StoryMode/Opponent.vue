<script setup>
const props = defineProps({
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

const opponentsImage = computed(() => `images/home/opponents/${props.image}.png`)
</script>

<template>
    <article class="content">
        <img
            :src="opponentsImage"
            alt="image"
            class="image">

        <div class="text-container">
            <h3 class="title">
                {{ title }}
            </h3>
            <p class="body">
                {{ body }}
            </p>
        </div>
    </article>
</template>

<style
    src="@styles/components/home/story-mode/opponent.scss"
    lang="scss"
    scoped>
</style>