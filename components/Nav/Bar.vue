<script setup>
import navLinks from '@/data/navLinks'
</script>

<template>
    <nav class="nav-bar">
        <ul class="nav-list">
            <NavItem
                v-for="({ to, text, icon, className }, index) in navLinks"
                :to="to"
                :text="text"
                :icon="icon"
                :key="index"
                :className="className" />
        </ul>
    </nav>
</template>

<style
    src="@styles/components/nav/bar.scss"
    lang="scss"
    scoped>
</style>