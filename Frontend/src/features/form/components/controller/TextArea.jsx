import React, { forwardRef ,useState} from 'react'
import { Textarea } from '../../../../components/ui/textarea'
import { Label } from '../../../../components/ui/label'
import { Controller } from 'react-hook-form'
import useFormContext from '../../hooks/useFormContext'
import Errormessage from '../Error-message'
import { cn } from '../../../../lib/utils'
const TextAreaComp = forwardRef(({ name, label, placeholder, helperText, className, ...textAreaProps }, ref) => {
    const { control, readOnly } = useFormContext();

   
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className='space-y-2'>
                    {label && (
                        <Label htmlFor={name}>{label}</Label>
                    )}
                    <Textarea 
                      {...field}
                      {...textAreaProps}
                      className={cn(`w-full ${className||""}`)}
                      ref={ref}
                      placeholder={placeholder}
                      readOnly={readOnly}
                    />
                    {error&&(
                        <Errormessage name={name}/>
                    )}
                     

                </div>
            )}
        />
    )
})

export default TextAreaComp
