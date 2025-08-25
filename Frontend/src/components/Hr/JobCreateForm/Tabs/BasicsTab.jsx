import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from '../../../ui/card'
import { Label } from '../../../ui/label'
import { Input } from '../../../ui/input'
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem } from '../../../ui/select'
import { Briefcase } from 'lucide-react'
import {Checkbox} from '../../../ui/checkbox'
const BasicsTab = () => {
    const departments = ["Engineering", "Design", "Product", "Marketing", "Sales"]
    const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]
    const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Lead", "Executive"]
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                        <span><Briefcase /></span>
                        Job Basics
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Job Title*</Label>
                                <Input type="text" placeholder="Enter the job title......" id="title" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department">Department*</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select the department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                departments.map((dep, idx) => {
                                                    return (
                                                        <SelectItem key={idx} value={dep}>{dep}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="location">Location*</Label>
                                <Input type="text" placeholder="Enter the Location......" id="location" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department">Job Type*</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                jobTypes.map((type, idx) => {
                                                    return (
                                                        <SelectItem key={idx} value={type}>{type}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department">Experience Level*</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                experienceLevels.map((exp, idx) => {
                                                    return (
                                                        <SelectItem key={idx} value={exp}>{exp}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {/* here the salary range */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end ">

                            <div className='space-y-1'>
                                <p className='text-[14px] font-semibold'>Salary Range</p>
                                <Label htmlFor="minimum" className="text-gray-400">Minimum</Label>
                                <Input placeholder="80000" id="minimum" />
                            </div>
                            <div className='space-y-1'>
                                <Label htmlFor="maximum" className="text-gray-400">Maximum</Label>
                                <Input placeholder="8000000" id="maximum" />
                            </div>
                            <div className='space-y-1'>
                                <Label htmlFor="currency">Currency</Label>
                                <Select defaultValue="USD">
                                    <SelectTrigger >USD</SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="USD">USD</SelectItem>
                                            <SelectItem value="EUR">EUR</SelectItem>
                                            <SelectItem value="GRP">GRP</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {/* here the below checkBox */}
                        <div className="flex items-center gap-2.5">
                            <div className=" flex gap-2.5">
                                <Checkbox id="remote"/>
                                <Label htmlFor="remote">Remote work available </Label>
                            </div>
                             <div className=" flex gap-2.5">
                                <Checkbox id="urgent"/>
                                <Label htmlFor="urgent">Urgent Hiring </Label>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BasicsTab
