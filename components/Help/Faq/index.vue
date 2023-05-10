<script setup>
import faqs from '@data/help/faq'

const currentFAQ = ref(null)

const handleChange = (index) => {
    if (currentFAQ.value === index)
        currentFAQ.value = null
    else
        currentFAQ.value = index
}
</script>

<template>
    <section class="faq-section">
        <HelpFaqExpansionPanel
            v-for="({ question, answer }, index) in faqs"
            :question="question"
            :answer="answer"
            :is-active="currentFAQ === index"
            :key="index"
            @change="handleChange(index)" />
    </section>
</template>

<style
    src="@styles/components/help/faq/container.scss"
    lang="scss"
    scoped>
</style>