
<script setup>

const active = ref(0)

const upadateActive = () => {
    const offset = document.getElementById('story-mode').offsetTop
    const scrollY = window.scrollY
    const height = window.innerHeight
    if (scrollY < offset) return

    active.value = Math.round((scrollY - offset) / height)
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
        <h1 class="title">
            Story Mode
        </h1>

        <div class="content-container">
            <article
                class="content"
                :class="{ active: active === 0 }">
            </article>
            <article
                class="content"
                :class="{ active: active === 1 }">
            </article>
            <article
                class="content"
                :class="{ active: active === 2 }">
            </article>
        </div>
    </section>
</template>

<style
    src="@styles/components/home/story-mode/section.scss"
    lang="scss"
    scoped>
</style>