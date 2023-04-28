<script setup>
import multiplayerDetails from '@data/multiplayerDetails'
</script>

<template>
    <section id="multiplayer">
        <h2 class="title">
            Play with your Friends
        </h2>

        <img
            src="@images/home/multiplayer/friends.png"
            alt="friends"
            class="image" />

        <div class="text-conainer">
            <article
                v-for="({name, description}, index) in multiplayerDetails"
                class="mode"
                :key="index">
                <h3 class="sub-title">
                    {{ name }}
                </h3>
                <p class="description">
                    {{ description }}
                </p>
            </article>
        </div>
    </section>
</template>

<style
    src="@styles/components/home/multiplayer.scss"
    lang="scss"
    scoped>
</style>