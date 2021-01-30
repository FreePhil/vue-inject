import { provide, inject, reactive } from 'vue'

const CounterContext = Symbol('CounterContext')

export function useCounterProvider (initialValue) {
    const valueObject = reactive({
        text: 'hello',
        count: initialValue
    })
    const increment = () => {
        valueObject.count++
    }

    provide(CounterContext, {
        valueObject,
        increment
    })
}

export function useCounterContext() {
    const context = inject(CounterContext)

    if (!context) {
        throw new Error('useCounterContext must be used with useCounterProvider')
    }

    return context
}

