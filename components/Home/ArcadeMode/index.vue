<script setup>
import arcadeEvents from '@data/arcadeEvents'
</script>

<template>
    <section id="arcade-mode">
        <div class="text-container">
            <h2 class="title">
                Arcade Mode
            </h2>
            <p class="content">
                Experience Pokémon trainer battles outside the Story Mode.
            </p>
        </div>

        <div class="event-container">
            <HomeArcadeModeCard
                v-for="({icon, title, description}, index) in arcadeEvents"
                :icon="icon"
                :title="title"
                :description="description"
                :class="icon"
                :key="index" />
        </div>
    </section>
</template>

<style
    src="@styles/components/home/arcade-mode/section.scss"
    lang="scss"
    scoped>
</style>