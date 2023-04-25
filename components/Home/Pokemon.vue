<script setup>
const count = ref(0)

const handleCountPokemon = () => {
    let counterStarted = false
    const maxCount = 300

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !counterStarted) {
                counterStarted = true
                const pokemonCountInterval = setInterval(() => {
                    if (maxCount < count.value) {
                        clearInterval(pokemonCountInterval)
                        count.value = `${maxCount}+`
                    }
                    else
                        count.value += 21
                }, 25)
            }
            else {
                count.value = 0
                counterStarted = false
            }
        })
    })

    observer.observe(document.getElementById('pokemon'))
}

onMounted(() => {
    handleCountPokemon()
})
</script>

<template>
    <section id="pokemon">
        <div class="text-container">
            <h1 class="title">
                <span class="count">
                    {{ count }}
                </span>
                Pokémon
            </h1>
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
            src="@images/home/pokemon.png"
            alt="Pokemon"
            class="image pokemon" />
        <!-- <img
            src="@images/home/about/phone-frame.png"
            alt="Phone Frame"
            class="phone-frame" /> -->
    </section>
</template>

<style
    src="@styles/components/home/pokemon.scss"
    lang="scss"
    scoped>
</style>