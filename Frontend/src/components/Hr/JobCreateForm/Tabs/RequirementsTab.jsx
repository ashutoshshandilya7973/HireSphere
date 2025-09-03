import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card'
import { Award} from 'lucide-react'
import { Label } from '../../../ui/label'
import DynamicListField from '../../../../features/form/components/controller/DynamicListField'
import MultiSelectChips from '../../../../features/form/components/controller/MultiSelectChips'
const RequirementsTab = () => {
    const suggestedSkills = [
        "React", "TypeScript", "Node.js", "Python", "AWS",
        "Docker", "GraphQL", "MongoDB", "PostgreSQL", "Git",
        "Agile", "Scrum"
    ];

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                        <span><Award /></span>
                        Requirements & Qualifications
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="">
                        <Label className="mb-2">Required Qualifications</Label>
                        <DynamicListField
                            name='qualification'
                            placeholder="e.g., 5+ years of React development experience"
                            btnPlaceholder="Add Requirement"
                            
                        />
                    </div>


                    <div className="mt-5">
                        <Label>Required Skills</Label>

                        <MultiSelectChips name="skills" group={suggestedSkills}/>
                        
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default RequirementsTab
