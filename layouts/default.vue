<template>
    <nav>
        <ul>
            <li>
                <nuxt-link to="/">
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/tutorials">
                    Tutorials
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/disclaimer">
                    Disclaimer
                </nuxt-link>
            </li>
        </ul>
    </nav>
    <main>
        <slot />
    </main>
</template>

<style
    src="@styles/main/app.scss"
    lang="scss">
</style>