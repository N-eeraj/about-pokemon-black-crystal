<script setup>
import { getInRange } from '@composables/random'

const randomCharacter = ref(null)

const modes = [
    'story',
    'exploration',
    'arcade',
    'pvp',
    'trade',
    'carnival'
]

onMounted(() => {  
    const randomNumber = getInRange(0, 4)
    randomCharacter.value = `images/home/about/characters/character-${randomNumber}.gif`
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
                :src="'images/home/about/phone-frame.png'"
                alt="Phone Frame"
                class="phone-frame"
                :style="`background-image: url(${randomCharacter});`" />

            <HomeAboutModeIcons
                v-for="(mode, index) in modes"
                :mode="mode"
                :key="index" />
        </div>
    </section>
</template>

<style
    src="@styles/components/home/about/section.scss"
    lang="scss"
    scoped>
</style>