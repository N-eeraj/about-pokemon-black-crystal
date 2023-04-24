<script setup>
defineProps({
    mode: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="mode-container">
        <img
            :src="`images/home/about/mode-icons/${mode}.svg`"
            class="icon" />
    </div>
</template>

<style
    src="@styles/components/home/about/mode-icon.scss"
    lang="scss"
    scoped>
</style>