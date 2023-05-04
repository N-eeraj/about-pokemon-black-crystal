
<script setup>
import opponentDetails from '@data/home/opponentDetails'

const active = ref(0)

const upadateActive = () => {
    const offset = document.getElementById('story-mode').offsetTop
    const scrollY = window.scrollY
    const height = window.innerHeight

    if (scrollY < offset) return
    active.value = Math.min(Math.round((scrollY - offset) / height), 2)
}

onMounted(() => {
    window.addEventListener('scroll', upadateActive)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', () => {})
})
</script>

<template>
    <section id="story-mode">
        <h2 class="title">
            Story Mode
        </h2>

        <div class="content-container">
            <HomeStoryModeOpponent
                v-for="({title, body, image}, index) in opponentDetails"
                :title="title"
                :body="body"
                :image="image"
                :class="{ show: active === index }"
                :key="index" />
        </div>
    </section>
</template>

<style
    src="@styles/components/home/story-mode/section.scss"
    lang="scss"
    scoped>
</style>