<script setup>
import { getInRange } from '@composables/random'

const randomCharacter = computed(() => {
    const randomNumber = getInRange(0, 4)
    return `/images/home/about/characters/character-${randomNumber}.gif`
})
</script>

<template>
    <section id="about-game">
        <div class="text-container">
            <h1 class="title">
                Explore the World of Pokémon
            </h1>
            <p class="content">
                This game offers 6 unique modes for you to experience. Play with, use in combat, and capture various Pokémon.
            </p>
        </div>

        <div class="image-container">
            <img
                :src="'/images/home/about/phone-frame.png'"
                alt="Phone Frame"
                class="phone-frame"
                :style="`background-image: url(${randomCharacter});`" />
        </div>
    </section>
</template>

<style
    src="@styles/components/home/about.scss"
    lang="scss"
    scoped>
</style>