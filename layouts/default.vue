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
                <a
                    href="https://n-eeraj.github.io/pokemon-black-crystal"
                    target="_blank">
                    Play Game
                </a>
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