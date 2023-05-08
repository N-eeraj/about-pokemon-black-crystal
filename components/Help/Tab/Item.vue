<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <div
        class="tab"
        :class="{ active: isActive }">
        {{ text }}
    </div>
</template>

<style
    src="@styles/components/help/tab/item.scss"
    lang="scss"
    scoped>
</style>