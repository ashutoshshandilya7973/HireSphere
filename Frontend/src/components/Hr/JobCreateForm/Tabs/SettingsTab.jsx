import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card'
import { User } from 'lucide-react'
import DatePicker from '../../../../features/form/components/controller/DatePicker'
import CheckboxComp from '../../../../features/form/components/controller/CheckBox'
import TextAreaComp from '../../../../features/form/components/controller/TextArea'
const SettingsTab = () => {

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
                        <DatePicker name="deadlineDate" label="Application Deadline" />
                        <DatePicker name="startDate" label="Expected Start Date" />
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                        <CheckboxComp name="skillAssessment" label="Require skills assessment for applicants" />
                    </div>
                    <div className='mt-5 '>
                        <TextAreaComp name="companyDescription" label="Company Description" placeholder="Brief description of your company,culture and value" rows={8} className="resize-none" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingsTab
