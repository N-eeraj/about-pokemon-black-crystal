<script setup>
import tabs from '@data/help/tabs'

const activetab = ref(null)

const handleSelect = value => activetab.value = value

onMounted(() => {
    activetab.value = tabs[0].value
})
</script>

<template>
    <HelpTabItem
        v-for="({ text, value }, index) in tabs"
        :text="text"
        :value="value"
        :is-active="activetab === value"
        :key="index"
        @select="handleSelect" />
</template>

<style
    src="@styles/components/help/tab/container.scss"
    lang="scss"
    scoped>
</style>