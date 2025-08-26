import React from 'react'
import { useFieldArray } from 'react-hook-form'
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card'
import { Award, Plus, X } from 'lucide-react'
import { Label } from '../../../ui/label'
import DynamicListField from '../DynamicListField'

const RequirementsTab = ({ register, control }) => {
    const suggestedSkills = [
        "React", "TypeScript", "Node.js", "Python", "AWS",
        "Docker", "GraphQL", "MongoDB", "PostgreSQL", "Git",
        "Agile", "Scrum"
    ];

    // useFieldArray to manage skills in form state
    const { fields, append, remove } = useFieldArray({
        control,
        name: "skills",
    });

    // all skills that are NOT selected yet
    const availableSkills = suggestedSkills.filter(
        skill => !fields.find(f => f.value === skill)
    );

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                        <span><Award /></span>
                        Requirements & Qualifications
                    </CardTitle>
                </CardHeader>w
                <CardContent>
                    {/* Qualifications (your DynamicListField component) */}
                    <div className="">
                        <Label className="mb-2">Required Qualifications</Label>
                        <DynamicListField
                            name='qualification'
                            inputPlaceholder="e.g., 5+ years of React development experience"
                            btnPlaceholder="Add Requirement"
                            register={register}
                            control={control}
                        />
                    </div>

                    {/* Skills Section */}
                    <div className="mt-5">
                        <Label>Required Skills</Label>

                        {/* Selected Skills */}
                        <div className="flex gap-2 mt-2.5 flex-wrap">
                            {fields.map((field, idx) => (
                                <div
                                    key={field.id}
                                    className="flex items-center bg-gray-300 gap-1.5 rounded-[5px] p-1"
                                >
                                    <p className="text-[14px]">{field.value}</p>
                                    <span onClick={() => remove(idx)}>
                                        <X className="h-4 w-4 cursor-pointer" />
                                    </span>
                                </div>
                            ))}
                        </div>

                        {fields.length > 0 && (
                            <div className="h-[0.5px] w-full bg-black mt-2.5 shadow-2xl"></div>
                        )}

                        {/* Suggested Skills */}
                        <div className="flex gap-2.5 flex-wrap mt-5">
                            {availableSkills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center bg-gray-300 rounded-[5px] p-1 gap-1.5 cursor-pointer shadow-lg shadow-gray-400/60"
                                    onClick={() => append({ value: skill })}
                                >
                                    <span><Plus className="h-4 w-4" /></span>
                                    <p className="text-[14px]">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default RequirementsTab
