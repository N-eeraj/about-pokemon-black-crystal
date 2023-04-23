const useAtTop = () => {
    const  router = useRouter()
    const elementRef = ref(null)

    const checkAtTop = () => {
        const { clientHeight, classList } = elementRef.value
        if (window.pageYOffset >= clientHeight)
            classList.remove('at-top')
        else {
            classList.add('at-top')
            router.replace({ hash: null })
        }
    }

    onMounted(() => {
        checkAtTop()
        window.addEventListener('scroll', checkAtTop)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', () => {})
    })

    return elementRef
}

export default useAtTop