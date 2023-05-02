<script setup>
import navLinks from '@data/navLinks'
const navBar = useAtTop()
</script>

<template>
    <nav
        ref="navBar"
        class="nav-bar at-top">
        <ul class="nav-list">
            <NavItem
                v-for="({ to, text, icon }, index) in navLinks"
                :to="to"
                :text="text"
                :icon="icon"
                :key="index"
                :class="icon" />
        </ul>
    </nav>
</template>

<style
    src="@styles/components/nav/bar.scss"
    lang="scss"
    scoped>
</style>