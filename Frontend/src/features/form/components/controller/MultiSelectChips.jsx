import React, { forwardRef, useState } from 'react'
import useFormContext from '../../hooks/useFormContext'
import { Controller } from 'react-hook-form'
import { useFieldArray } from 'react-hook-form'
import { X ,Plus} from 'lucide-react'

const MultiSelectChips = forwardRef(({ name, group = [], className, ...multiSelectProps }, ref) => {
    const { control, readOnly } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: name
    })
    const availableSkills = group.filter((item) => !fields.find(f => f.value === item))
    return (
        <div>
            <div className="flex gap-2 mt-2.5 flex-wrap">
                {
                    fields.map((item, index) => {
                        return (
                            <div className="flex items-center bg-gray-300 gap-1.5 rounded-[5px] p-1" key={item.id}>
                                <p className="text-[14px]">{item.value}</p>
                                <span onClick={() => remove(index)}>
                                    <X className="h-4 w-4 cursor-pointer" />

                                </span>
                            </div>
                        )
                    })
                }
            </div>
            {fields.length > 0 && (
                <div className="h-[0.5px] w-full bg-black mt-2.5 shadow-2xl"></div>
            )}
            <div className="flex gap-2.5 flex-wrap mt-5">
                {
                    availableSkills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex items-center bg-gray-300 rounded-[5px] p-1 gap-1.5 cursor-pointer shadow-lg shadow-gray-400/60"
                            onClick={() => append({ value: skill })}
                        >
                            <span><Plus className="h-4 w-4" /></span>
                            <p className="text-[14px]">{skill}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
})

export default MultiSelectChips
