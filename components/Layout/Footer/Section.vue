<script setup>
import footerLinks from '@data/layout/footerLinks'
</script>

<template>
    <footer class="footer-section">
        <div class="title">
            <img
                src="/images/pokemon-logo.png"
                alt="Pokémon"
                class="logo" />
            <h3 class="game-name">
                Black Crystal
            </h3>
            <LinkButton
                link="https://n-eeraj.github.io/pokemon-black-crystal"
                external
                class="play-now-btn">
                <span>
                    Play now
                </span>
            </LinkButton>
        </div>

        <ul
            v-for="(linkGroup, groupIndex) in footerLinks"
            class="link-group"
            :key="groupIndex">
            <LayoutFooterLink
                v-for="({link, text}, itemIndex) in linkGroup"
                :link="link"
                :text="text"
                :key="`${groupIndex}.${itemIndex}`" />
        </ul>
    </footer>
</template>

<style
    src="@styles/components/layout/footer/section.scss"
    lang="scss"
    scoped>
</style>