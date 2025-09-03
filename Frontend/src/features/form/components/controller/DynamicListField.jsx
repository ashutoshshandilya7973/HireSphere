import React, { forwardRef } from 'react'
import { useFieldArray } from 'react-hook-form'
import useFormContext from '../../hooks/useFormContext'
import { Label } from '../../../../components/ui/label'
import TextField from './TextField'
import { Plus, X } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
const DynamicListField = forwardRef(({ name, label, placeholder = "Enter the text", btnPlaceholder, helperTxet, className, ...dynamicProps }, ref) => {
    const { control, readOnly } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: name
    })
    return (
        <div className='space-y-2'>
            {
                label && (<Label htmlFor={name}>{label}</Label>

                )
            }
            {
                fields.map((item, index) => {
                    return (
                        <div className="flex items-center gap-2" key={item.id}>
                            <div className="flex-1">
                                <TextField
                                    name={`${name}[${index}].value`}
                                    placeholder={placeholder}
                                    className="w-full" // keep w-full inside TextField
                                    {...dynamicProps}
                                />
                            </div>
                            {fields.length > 1 && (
                                <X
                                    className="flex-none p-1 hover:bg-gray-400 hover:rounded-[5px] cursor-pointer"
                                    onClick={() => remove(index)}
                                />
                            )}
                        </div>

                    )
                })
            }
            <Button type="button" className="flex items-center w-full bg-gray-500 mt-2.5" onClick={() => append({ value: "" })}>
                <span><Plus /></span>
                {btnPlaceholder}
            </Button>

        </div>
    )
})

export default DynamicListField
