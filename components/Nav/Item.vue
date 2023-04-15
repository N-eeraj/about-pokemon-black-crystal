<script setup>
defineProps({
    to: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="nav-item">
        <nuxt-link
            :to="to"
            class="nav-link">
            <Icon :name="icon" />
            <span>
                {{ text }}
            </span>
        </nuxt-link>
    </li>
</template>

<style
    src="@styles/components/nav/item.scss"
    lang="scss"
    scoped>
</style>