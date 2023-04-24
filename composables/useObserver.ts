interface OptionsConfig {
    selector: string
    reset?: boolean
    className?: string
    delay?: number
}

const useObserver = (options: OptionsConfig): void => {
    const defautClassName = 'is-visible'

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting)
                entry.target.classList.add(options.className || defautClassName)
            else if (options.reset)
                entry.target.classList.remove(options.className || defautClassName)
        })
    })

    document.querySelectorAll<HTMLElement>(options.selector)
        .forEach((element, index) => {
            observer.observe(element)
            if (options.delay)
                element.style.transitionDelay = `${options.delay * index}ms`
        })
}

export default useObserver