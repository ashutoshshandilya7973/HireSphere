import React, { forwardRef } from 'react'
import { Controller } from 'react-hook-form'
import useFormContext from '../../hooks/useFormContext'
import { Label } from '../../../../components/ui/label'
import { cn } from '../../../../lib/utils'
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup } from '../../../../components/ui/select'
const Menu = forwardRef(({ name, label, placeholder = "Select the date", group = [], helpertext, ...menuProps }, ref) => {
    const { control, readOnly } = useFormContext()
    return (
        <div className='space-y-2'>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange, ...fieldProps }, fieldState: { error } }) => {
                    return (
                        <Select value={value} onValueChange={onChange} {...menuProps} disabled={readOnly}>
                            <SelectTrigger id={name}
                                aria-invalid={!!error}
                                ref={ref} className={cn(
                                    "w-full",
                                    error && "border-red-500 ring-red-500"
                                )}>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        group.map((item) => {
                                            return (
                                                <SelectItem key={item} value={item}>{item}</SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>

                        </Select>
                    )
                }}
            />

        </div>
    )
})

export default Menu
