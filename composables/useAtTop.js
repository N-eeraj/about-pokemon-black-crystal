const useAtTop = () => {
    const route = useRoute()

    const elementRef = ref(null)

    const checkAtTop = () => {
        const { clientHeight, classList } = elementRef.value
        if (window.pageYOffset < clientHeight && route.path === '/')
            classList.add('at-top')
        else
            classList.remove('at-top')
    }


    onMounted(() => {
        checkAtTop()
        window.addEventListener('scroll', checkAtTop)
        watch(() => route.path, checkAtTop)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', () => {})
    })

    return elementRef
}

export default useAtTop