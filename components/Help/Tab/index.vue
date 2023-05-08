<script setup>
import tabs from '@data/help/tabs'

const activetab = ref(0)
</script>

<template>
    <HelpTabItem
        v-for="({ text, value }, index) in tabs"
        :text="text"
        :value="value"
        :is-active="index === activetab"
        :key="index" />
</template>

<style
    src="@styles/components/help/tab/container.scss"
    lang="scss"
    scoped>
</style>