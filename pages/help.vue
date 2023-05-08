<script setup>
useMeta('Help')

const handleTabChange = tab => {
  console.log(tab)
}
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