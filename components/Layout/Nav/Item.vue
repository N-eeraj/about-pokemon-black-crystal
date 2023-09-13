<script setup>
const props = defineProps({
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
const runtime = useRuntimeConfig()
const icon = computed(() => `${runtime.public.baseURL}/icons/navigation/${props.icon}.svg`)
</script>

<template>
    <li class="nav-item">
        <NuxtLink
            :to="to"
            class="nav-link">

            <img
                :src="icon"
                :alt="icon"
                class="link-icon" />

            <span class="link-text">
                {{ text }}
            </span>

        </NuxtLink>
    </li>
</template>

<style
    src="@styles/components/layout/nav/item.scss"
    lang="scss"
    scoped>
</style>