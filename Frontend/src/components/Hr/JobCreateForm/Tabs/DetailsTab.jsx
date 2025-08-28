import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from '../../../ui/card'
import { Lightbulb, Target } from 'lucide-react'
import { Textarea } from '../../../ui/textarea'
import DynamicListField from '../DynamicListField'

const DetailsTab = ({register,control}) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                        <span><Target /></span>
                        Job Description
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid w-full gap-2'>

                        <Textarea {...register("jobDescription")} placeholder="Describe the role,company culture,and what makes this oppertunity exciting..." rows={8} className="resize-none"  />
                        <div className="flex items-center gap-1">
                            <span><Lightbulb className='h-3 w-3' /></span>
                            <p className='text-muted-foreground text-[14px]'>Tip: Include company mission, role impact, and growth opportunities</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-2.5">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                            <span><Target /></span>
                            Key Responsibilities
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DynamicListField name="responsibility" inputPlaceholder="e.g.,Lead Frontend Development initiative" btnPlaceholder="Add Responsibility" register={register} control={control}/>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                            <span><Target /></span>
                            Benifits & Perks
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DynamicListField name="benifits" inputPlaceholder="e.g.,Health insurence,401k matching" btnPlaceholder="Add Benifit" register={register} control={control}/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default DetailsTab
