export const useObserver = ({ selector, delay, reset }) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting)
                entry.target.classList.add('is-visible')
            else if (reset)
                entry.target.classList.remove('is-visible')
        })
    })

    document.querySelectorAll(selector)
        .forEach((element, index) => {
            observer.observe(element)
            if (delay)
                element.style.transitionDelay = `${delay * index}ms`
        })
}