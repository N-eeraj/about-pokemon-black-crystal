<template>
    <header class="header">
        <div class="content-container">
            <div class="title">
                <img
                    src="@images/pokemon-logo.png"
                    alt="Pokémon"
                    class="logo" />
                <h3 class="game-name">
                    Black Crystal
                </h3>
            </div>

            <article class="description">
                <h2 class="heading">
                    Gotta catch 'em all!
                </h2>
                <p class="content">
                    Become a Pokémon trainer, overcome challenges & become a Pokémon master.
                </p>
            </article>

            <div class="cta-container">
                <LinkButton
                    text="Play Now"
                    link="https://n-eeraj.github.io/pokemon-black-crystal"
                    external
                    class="play-now-btn" />
                <LinkButton
                    text="Know More"
                    link="#about-game"
                    class="know-more-btn" />
            </div>
        </div>

        <img
            src="@images/home/header/pokemon.webp"
            alt="Decoration Image"
            class="decoration-image" />
    </header>
</template>

<style
    src="@styles/components/home/header.scss"
    lang="scss"
    scopped>
</style>