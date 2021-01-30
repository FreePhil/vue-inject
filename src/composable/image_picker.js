import { provide, inject, reactive } from 'vue'

const ImagePickerContext = Symbol('ImagePickerContext')

export function useImagePickerProvider () {
    const lessonPlanContext = reactive({
        selectedImage: '',
        currentPage: 0
    })
    const availableImages = ['nature', 'people', 'traffic', 'mountain', "school"]

    provide(ImagePickerContext, {
        lessonPlanContext,
        availableImages
    })
}

export function useImagePickerContext() {
    const context = inject(ImagePickerContext)

    if (!context) {
        throw new Error('useCounterContext must be used with useCounterProvider')
    }

    return context
}

