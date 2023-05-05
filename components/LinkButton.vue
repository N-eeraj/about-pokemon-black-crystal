<script setup>
defineProps({
    text: {
        type: String,
        required: false
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
        :target="external ? '_blank' : '_self'"
        class="link-btn">
        <template v-if="text">
            {{ text }}
        </template>
        <slot v-else />
    </NuxtLink>
</template>

<style
    src="@styles/components/linkButton.scss"
    lang="scss"
    scoped>
</style>