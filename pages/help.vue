<script setup>
import tabs from '@data/help/tabs'

useMeta('Help')

const router = useRouter()

const activeTab = ref(null)

const handleTabChange = tab => {
  activeTab.value = tab
  router.replace({ query: { tab } })
}
</script>

<template>
  <div class="tab-container">
    <HelpTab
      :tabs="tabs"
      @change="handleTabChange" />

    <HelpFaqs v-if="activeTab === 'faq'" />
    <HelpVideos v-else-if="activeTab === 'videos'" />
  </div>
</template>

<style
    src="@styles/pages/help.scss"
    lang="scss"
    scoped>
</style>