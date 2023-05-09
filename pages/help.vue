<script setup>
useMeta('Help')

const router = useRouter()
const handleTabChange = tab => router.replace({ query: { tab } })
</script>

<template>
  <div class="tab-container">
    <HelpTab @change="handleTabChange" />
  </div>
</template>

<style
    src="@styles/pages/help.scss"
    lang="scss"
    scoped>
</style>