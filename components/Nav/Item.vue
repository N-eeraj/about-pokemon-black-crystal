<script setup>
defineProps({
    to: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="nav-item">
        <NuxtLink
            :to="to"
            class="nav-link">

            <img
                :src="`icons/navigation/${icon}.svg`"
                :alt="icon"
                class="link-icon" />

            <span class="link-text">
                {{ text }}
            </span>

        </NuxtLink>
    </li>
</template>

<style
    src="@styles/components/nav/item.scss"
    lang="scss"
    scoped>
</style>