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

const emit =  defineEmits(['select'])

const handleSelect = () => emit('select', props.value)
</script>

<template>
    <div
        class="tab-item"
        :class="{ active: isActive }"
        @click="handleSelect">
        {{ text }}
    </div>
</template>

<style
    src="@styles/components/help/tab/item.scss"
    lang="scss"
    scoped>
</style>