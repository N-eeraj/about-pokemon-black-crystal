<script setup>
import navLinks from '@/data/navLinks'

const navBar = ref(null)

const checkAtTop = () => {
    const { clientHeight: navBarHeight, classList: navBarClassList } = navBar.value
    if (window.pageYOffset > navBarHeight)
        navBarClassList.remove('at-top')
    else
        navBarClassList.add('at-top')
}

onMounted(() => {
    checkAtTop()
    window.addEventListener('scroll', checkAtTop)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', () => {})
})
</script>

<template>
    <nav
        ref="navBar"
        class="nav-bar at-top">
        <ul class="nav-list">
            <NavItem
                v-for="({ to, text, icon, className }, index) in navLinks"
                :to="to"
                :text="text"
                :icon="icon"
                :key="index"
                :className="className" />
        </ul>
    </nav>
</template>

<style
    src="@styles/components/nav/bar.scss"
    lang="scss"
    scoped>
</style>