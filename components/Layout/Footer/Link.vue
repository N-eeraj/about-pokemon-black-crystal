<script setup>
defineProps({
    link: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="link-item">
    <NuxtLink
        :to="link"
        class="link">
        {{ text }}
    </NuxtLink>
    </li>
</template>

<style
    src="@styles/components/layout/footer/link.scss"
    lang="scss"
    scoped>
</style>