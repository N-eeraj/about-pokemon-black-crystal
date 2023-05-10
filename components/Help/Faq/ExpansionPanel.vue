<script setup>
defineProps({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})
</script>

<template>
    <details class="expansion-panel">
        <summary class="question">
            {{ question }}
        </summary>
        <div
            v-html="answer"
            class="answer" />
    </details>
</template>

<style
    src="@styles/components/help/faq/expansion-panel.scss"
    lang="scss"
    scoped>
</style>