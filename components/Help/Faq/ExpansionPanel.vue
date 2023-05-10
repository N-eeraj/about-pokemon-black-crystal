<script setup>
defineProps({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false
    }
})

const emit = defineEmits(['change'])

const handleChange = () => emit('change')
</script>

<template>
    <div
        class="expansion-panel"
        :class="{ 'is-active': isActive }">
        <strong
            class="question"
            @click="handleChange">
            {{ question }}
        </strong>
        <div
            v-html="isActive ? answer : ''"
            class="answer" />
    </div>
</template>

<style
    src="@styles/components/help/faq/expansion-panel.scss"
    lang="scss"
    scoped>
</style>