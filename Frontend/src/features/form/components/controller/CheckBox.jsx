import React, { useState } from 'react'
import { forwardRef } from 'react'
import { Controller } from 'react-hook-form'
import { Checkbox  } from '../../../../components/ui/checkbox'
import useFormContext from '../../hooks/useFormContext'
import { Label } from '../../../../components/ui/label'
import Errormessage from '../Error-message'
const CheckboxComp = forwardRef(({ name, label, labelplacement = "end", helpertext, ...checkboxprops }, ref) => {
    const { control, readOnly } = useFormContext()
    
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, ...field }, fieldState: { error } }) => {
                const checkbox = (<Checkbox
                    {...checkboxprops}
                    {...field}
                    ref={ref}
                    checked={!!value}
                    onCheckedChange={onChange}
                    disabled={readOnly}
                    className={error ? "border-red-500 ring-red-500":""}
                />
                )
                return (
                    <div className="flex flex-col gap-1">
                         <div className={`flex items-center ${labelplacement==="start"?"flex-row-reverse gap-2":" gap-2"}`}>
                            {checkbox}
                            {label&&(
                                <Label htmlFor={name} className={error?"text-red-500":""}>{label}</Label>
                            )}
                         </div>
                         {(error)&&(
                            <>
                            <Errormessage name={name} />
                            </>
                         )}
                         
                    </div>
                )
            }}
        />
    )
})

export default CheckboxComp
