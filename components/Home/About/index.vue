<script setup>
import { getInRange } from '@composables/useRandom'
import gameModes from '@data/home/gameModes'

const randomCharacter = ref(null)

const handleRandomImage = () => {
    const randomNumber = getInRange(0, 4)
    randomCharacter.value = `images/home/about/characters/character-${randomNumber}.gif`
}

const handleObserver = () => {
    const observerOptions = {
        selector: '.mode-container',
        reset: true,
        delay: 100
    }
    useObserver(observerOptions)
}

onMounted(() => {
    handleRandomImage()
    handleObserver()
})
</script>

<template>
    <section id="about-game">
        <div class="text-container">
            <h2 class="title">
                Explore the World of Pokémon
            </h2>
            <article class="content">
                This game offers 6 unique modes for you to experience. Play with, use in combat, and capture various Pokémon.
            </article>
        </div>

        <div class="image-container">
            <img
                v-if="randomCharacter"
                src="/images/home/about/phone-frame.png"
                alt="Phone Frame"
                class="phone-frame"
                :style="`background-image: url(${randomCharacter});`" />

            <HomeAboutModeIcons
                v-for="(mode, index) in gameModes"
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