import React, { forwardRef,useState } from 'react'
import { Controller } from 'react-hook-form'
import useFormContext from '../../hooks/useFormContext'
import { Label } from '../../../../components/ui/label'
import {Input} from '../../../../components/ui/input'
import { cn } from '../../../../lib/utils'
import Errormessage from '../Error-message'

const TextField = forwardRef(({name,label,type="text",placeholder="Enter the text",className,...textfieldProps},ref) => {
    const {control,readOnly}=useFormContext()
    
  return (
    <Controller
       name={name}
       control={control}
       render={({field,fieldState:{error}})=>(
                <div className='space-y-2'>
                    {label&&<Label htmlFor={name}>{label}</Label>}

                    <Input
                      {...textfieldProps}
                      {...field}
                      type={type}
                      id={name}
                      ref={ref}
                      placeholder={placeholder}
                      readOnly={readOnly}
                     className={cn(`w-full ${className||""}`)}

                    />
                    {error&&(
                        <Errormessage  name={name}/>
                    )}

                    

                </div>
       )}
    />
  )
})

export default TextField
