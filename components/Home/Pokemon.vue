<script setup>
import { getInRange } from '@composables/useRandom'
import pokemonCards from '@data/pokemonCards'

const count = ref(0)
const randomPokemonImage = ref(null)

const handleCountPokemon = () => {
    let counterStarted = false
    const maxCount = 300

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !counterStarted) {
                counterStarted = true
                const pokemonCountInterval = setInterval(() => {
                    if (maxCount < count.value || count.value === `${maxCount}+`) {
                        clearInterval(pokemonCountInterval)
                        count.value = `${maxCount}+`
                    }
                    else
                        count.value += 9
                }, 30)
            }
            else {
                count.value = 0
                counterStarted = false
            }
        })
    })

    observer.observe(document.querySelector('#pokemon .count'))
}

const handleRandomPokemon = () => {
    const randomPokemonName = pokemonCards[getInRange(0, pokemonCards.length)]
    randomPokemonImage.value = `images/home/pokemon/cards/${randomPokemonName}.png`
}

onMounted(() => {
    handleRandomPokemon()
    handleCountPokemon()
})
</script>

<template>
    <section id="pokemon">
        <div class="text-container">
            <h2 class="title">
                <span class="count">
                    {{ count }}
                </span>
                Pokémon
            </h2>
            <article class="content-container">
                <p class="content">
                    There are over 300 Pokémon for you to encounter and possibly catch. Can you be a true Pokémon master and catch them all?
                </p>
                <p class="content">
                    Use 
                    <strong>
                        Exploration Mode
                    </strong>
                    to encounter wild Pokémon across various habitats.
                </p>
                <p class="content">
                    Try your luck by checking if you could spot a legendary Pokémon in the
                    <strong>
                        Legendary Hunt
                    </strong>
                    .
                </p>
            </article>
        </div>

        <img
            src="@images/home/pokemon/group.png"
            alt="Pokemon"
            class="image pokemon" />
        <img
            :src="randomPokemonImage"
            :alt="randomPokemonImage"
            class="image pokemon-card" />
    </section>
</template>

<style
    src="@styles/components/home/pokemon.scss"
    lang="scss"
    scoped>
</style>