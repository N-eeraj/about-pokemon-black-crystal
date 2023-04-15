<script setup>
import navLinks from '@/data/navLinks'
</script>

<template>
    <nav class="nav-bar">
        <ul>
            <NavItem
                v-for="({ to, text, icon }, index) in navLinks"
                :to="to"
                :text="text"
                :icon="icon"
                :key="index" />
        </ul>
    </nav>
</template>

<style
    src="@styles/components/nav/bar.scss"
    lang="scss"
    scoped>
</style>