<script setup>
useMeta('Page not found')
</script>

<template>
    <div class="error-container">
        <img
            src="/images/404.png"
            alt="Sleeping Snorlax"
            class="error-image" />
        <div class="text-container">
            <h3 class="message">
                A sleeping Snorlax blocked your path !
            </h3>
            <NuxtLink
                to="/"
                replace
                class="redirect-btn">
                Return Home
            </NuxtLink>
        </div>
    </div>
</template>

<style
    src="@styles/pages/error.scss"
    lang="scss">
</style>