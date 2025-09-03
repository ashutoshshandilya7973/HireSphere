import React from 'react'
import { useFormContext as useRHFFormContext } from 'react-hook-form'
const useFormContext = () => {
    const context = useRHFFormContext()
    if (context === undefined) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context
}

export default useFormContext
