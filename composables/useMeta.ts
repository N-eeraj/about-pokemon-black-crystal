const useMeta = (page?: string): void => {
    const title = 'Pokémon Black Crystal'
    const website = 'https://n-eeraj.github.io/about-pokemon-black-crystal'
    const description = `${title} is a free to play fan made online Pokémon game that you can play with your friends`
    const image = `${website}/images/pokeball.png`

    useHead({
        title: page ? `${page} | ${title}` : title,
        meta: [
            { name: 'title', content: title },
            { name: 'ogType', content: 'website' },
            { name: 'ogTitle', content: title },
            { name: 'ogUrl', content: website },
            { name: 'description', content: description },
            { name: 'ogDescription', content: description },
            { name: 'ogImage', content: image },
            { hid: 'og-image', property: 'og:image', content: image },
            { name: 'twitterCard', content: 'summary_large_image' }
        ]
    })
}

export default useMeta