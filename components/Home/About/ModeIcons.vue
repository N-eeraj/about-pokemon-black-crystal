<script setup>
const props = defineProps({
    mode: {
        type: String,
        required: true
    }
})
const runtime = useRuntimeConfig()
const icon = computed(() => `${runtime.public.baseURL}/images/mode-icons/${props.mode}.svg`)
</script>

<template>
    <div class="mode-container">
        <img
            :src="icon"
            :alt="mode"
            class="icon" />
    </div>
</template>

<style
    src="@styles/components/home/about/mode-icon.scss"
    lang="scss"
    scoped>
</style>