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
    <details>
        <summary>
            {{ question }}
        </summary>
        <p>
            {{ answer }}
        </p>
    </details>
</template>

<style
    src="@styles/components/help/faq/container.scss"
    lang="scss"
    scoped>
</style>