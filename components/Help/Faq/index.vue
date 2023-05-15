<script setup>
import faqs from '@data/help/faq'

const route = useRoute()
const router = useRouter()
const currentFAQ = ref(null)

const handleChange = (index) => {
    if (currentFAQ.value === index) {
        currentFAQ.value = null
        router.replace({ query: { faq: index } })
    }
    else {
        currentFAQ.value = index
        router.replace({ query: { ...route.query, qNo: index + 1 } })
    }
}

onMounted(() => {
    if (route.query.qNo)
        handleChange(route.query.qNo - 1)
})
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