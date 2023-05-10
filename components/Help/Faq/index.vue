<script setup>
import faqs from '@data/help/faq'
</script>

<template>
    <section class="faq-section">
        <HelpFaqExpansionPanel
            v-for="({ question, answer }, index) in faqs"
            :question="question"
            :answer="answer"
            :key="index" />
    </section>
</template>

<style
    src="@styles/components/help/faq/container.scss"
    lang="scss"
    scoped>
</style>