import React, { useState, forwardRef } from "react"
import { Controller } from "react-hook-form"
import useFormContext from "../../hooks/useFormContext"
import { Button } from "../../../../components/ui/button"
import { Calendar } from "../../../../components/ui/calendar"
import { Label } from "../../../../components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "../../../../components/ui/popover"
import { Calendar1 } from "lucide-react"
import { cn } from "../../../../lib/utils"
import Errormessage from "../Error-message"
const DatePicker = forwardRef(({ name, label, helpertext, ...dateProps }, ref) => {
    const { control } = useFormContext()
    const [open, setOpen] = useState(false)
   

    return (
        <div className="flex flex-col w-full space-y-2">
            {label && <Label htmlFor={name}>{label}</Label>}

            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => {
                    const dateValue = value ? new Date(value) : null

                    return (
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    ref={ref}
                                    id={name}
                                    variant="outline"
                                    className={cn(`w-full justify-between ${error ? "border-red-500 ring-red-500" : ""
                                        }`)}
                                    aria-invalid={!!error}
                                >
                                    {dateValue ? dateValue.toLocaleDateString() : "mm-dd-yyyy"}
                                    <Calendar1 className="ml-2 h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={dateValue}
                                    onSelect={(date) => {
                                        onChange(date ?? null)
                                        setOpen(false)
                                    }}
                                    {...dateProps}
                                />
                            </PopoverContent>

                          {error&&(
                            <Errormessage name={name} />
                          )}
                          
                        </Popover>
                    )
                }}
            />
        </div>
    )
})

export default DatePicker
