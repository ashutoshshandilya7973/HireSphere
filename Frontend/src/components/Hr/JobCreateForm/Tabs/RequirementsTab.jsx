import React, { useState } from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from '../../../ui/card'
import { Award, Cross, Plus, X } from 'lucide-react'
import { Label } from '../../../ui/label'
import DynamicListField from '../DynamicListField'

const RequirementsTab = () => {
    const [skills, setSkills] = useState([])
    const suggestedSkills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "MongoDB", "PostgreSQL", "Git", "Agile", "Scrum"];
    const [skillData, setSkillData] = useState(suggestedSkills)

    function clickHandler(skill) {
        setSkillData((prev)=>prev.filter(temp=>temp!==skill))
        setSkills(prev => [...prev, skill])
    }
    function removeHandler(skill) {
        setSkills(prev => prev.filter((item) => item !== skill))
        setSkillData(prev=>[...prev,skill])
    }
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
                        <Label>Required Qualifiactions</Label>
                        <DynamicListField inputPlaceholder="e.g.,5+ years of React development experience" btnPlaceholder="Add Requirement" />
                    </div>
                    <div className=" mt-5">
                        <Label>Required Skills</Label>
                        <div className="flex gap-2 mt-2.5">
                            {
                                skills.map((skill, idx) => {
                                    return (
                                        <div className="flex items-center bg-gray-300 gap-1.5 rounded-[5px] p-1" key={idx}>
                                            <p className="text-[14px]">{skill}</p>
                                            <span onClick={() => removeHandler(skill)}><X className='h-4 w-4 cursor-pointer' /></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            skills[0] && <div className='h-[0.5px] w-full bg-black mt-2.5 shadow-2xl '></div>
                        }
                        <div className="flex gap-2.5 flex-wrap mt-5">
                            {
                                skillData.map((skill, idx) => {
                                    return (
                                        <div className="flex items-center bg-gray-300 rounded-[5px] p-1 gap-1.5 cursor-pointer shadow-lg shadow-gray-400/60 " onClick={() => clickHandler(skill)} key={idx}>
                                            <span><Plus className='h-4 w-4' /></span>
                                            <p className="text-[14px]">{skill}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default RequirementsTab
