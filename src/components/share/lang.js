import { ref, computed } from 'vue'

export function useLocale() {
    const raw = navigator.languages?.[0]
        || navigator.language
        || 'en-US'

    const locale = ref(raw)

    const lang = computed(() => locale.value.split('-')[0])

    return { locale, lang }
}