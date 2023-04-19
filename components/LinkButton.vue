<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    external: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <NuxtLink
        :to="link"
        :target="external ? '_blank' : '_self'">
        {{ text }}
    </NuxtLink>
</template>