<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <img
            :src="`icons/events/${icon}.svg`"
            :alt="icon"
            class="icon">
        <article class="text-container">
            <span class="sub-title">
                {{ title }}
            </span>
            <p class="description">
                {{ description }}
            </p>
        </article>
    </div>
</template>

<style
    src="@styles/components/home/arcade-mode/card.scss"
    lang="scss"
    scoped>
</style>