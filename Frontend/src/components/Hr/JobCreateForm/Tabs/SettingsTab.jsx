import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card'
import { Popover, PopoverTrigger, PopoverContent } from '../../../ui/popover'
import { Calendar } from '../../../ui/calendar'
import { Calendar1, User } from 'lucide-react'
import { Label } from '../../../ui/label'
import { Button } from '../../../ui/button'
import { Checkbox } from '../../../ui/checkbox'
import { Textarea } from '../../../ui/textarea'
import { Controller } from 'react-hook-form'
const SettingsTab = ({ register, control, setValue }) => {


    const [openDeadline, setOpenDeadline] = useState(false)
    const [openStart, setOpenStart] = useState(false)

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                        <span><User /></span>
                        Settings
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Application Deadline */}
                        <div>
                            <Label htmlFor="deadline">Application Deadline</Label>
                            <div className="mt-5">
                                <Controller
                                    name="deadLineDate"
                                    control={control}
                                    render={({field}) => (<Popover open={openDeadline} onOpenChange={setOpenDeadline}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                id="deadline"
                                                className="bg-gray-100 w-full text-black hover:bg-gray-300 flex justify-between"
                                            >
                                                {field.value ? field.value.toLocaleDateString() : "mm-dd-yyyy"}
                                                <Calendar1 />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                captionLayout="dropdown"
                                                onSelect={(date) => {field.onChange(date);  setOpenDeadline(false);  }}

                                            />
                                        </PopoverContent>
                                    </Popover>)}
                                />
                            </div>
                        </div>

                        {/* Expected Start Date */}
                        <div>
                            <Label htmlFor="start">Expected Start Date</Label>
                            <div className="mt-5">
                                <Controller
                                  name="startDate"
                                  control={control}
                                  render={({field})=>(
                                    <Popover open={openStart} onOpenChange={setOpenStart}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="start"
                                            className="bg-gray-100 w-full text-black hover:bg-gray-300 flex justify-between"
                                        >
                                            {field.value ? field.value.toLocaleDateString() : "mm-dd-yyyy"}
                                            <Calendar1 />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            captionLayout="dropdown"
                                            onSelect={(date) => { field.onChange(date);setOpenStart(false) }}
                                        />
                                    </PopoverContent>
                                </Popover>
                                  )}

                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-5 flex items-center gap-2">
                        <Checkbox id="skill"     {...register("requireSkills")}
                        />
                        <Label htmlFor="skill">Require skills assessment for applicants</Label>
                    </div>
                    <div className='mt-5 '>
                        <Label className="mb-3" htmlFor="description">Company Description</Label>
                        <Textarea {...register("description")} rows={8} className="resize-none shadow-lg shadow-gray-300/30" id="description" placeholder="Brief description of your company,culture and value" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingsTab
