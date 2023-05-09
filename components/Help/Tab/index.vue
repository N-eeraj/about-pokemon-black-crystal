<script setup>
import tabs from '@data/help/tabs'

const emit =  defineEmits(['change'])
const activetab = ref(null)

const handleSelect = value => activetab.value = value

watch(activetab, () => emit('change', activetab.value))

onMounted(() => {
    activetab.value = tabs[0].value
})
</script>

<template>
    <div class="tab-switch-container">
        <HelpTabItem
            v-for="({ text, value }, index) in tabs"
            :text="text"
            :value="value"
            :is-active="activetab === value"
            :key="index"
            @select="handleSelect" />
    </div>
</template>

<style
    src="@styles/components/help/tab/container.scss"
    lang="scss"
    scoped>
</style>