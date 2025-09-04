import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from "../ui/card"
import { Calendar, DollarSign, Ellipsis, Mail, MapPin, Pencil, User } from 'lucide-react'
import { Badge } from "../ui/badge"
import { Button } from '../ui/button'
const JobsTab = ({ jobsTab = [] }) => {
    const [currentValue, setCurrentValue] = useState(jobsTab[0])
    return (
        <div>
            <Tabs value={currentValue} onValueChange={setCurrentValue}>
                <TabsList className="bg-gray-200  ">
                    {
                        jobsTab.map((item, index) => {
                            return (<TabsTrigger key={index} value={item} className="m-2 text-gray-600">{item}</TabsTrigger>)
                        })
                    }
                </TabsList>
                {/* here i need to use the map on tabscontent to map the value to the tag */}
                <TabsContent value="All" >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3"><p className='text-[20px] text-gray-600'>Senior Frontend Developer</p> <Badge>Active</Badge> </CardTitle>
                            <CardAction><Ellipsis size={16} /></CardAction>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2.5 !mt-0 text-gray-600">
                                <div className="flex items-center gap-1">Engineering</div>
                                <div className="flex items-center gap-1"><span><MapPin size={16} /></span><p>San Fransisco</p></div>
                                <div className="flex items-center gap-1"><span><DollarSign size={16} /></span><p>{"$120-$150"}</p></div>
                                <div className="flex items-center gap-1"></div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between mt-2">
                            <div className="flex gap-5 text-gray-600">
                                <div className="flex items-center gap-1"><span><User size={16} /></span><p>23 Applicant</p></div>
                                <div className="flex items-center gap-1"><span><Calendar size={16} /></span><p>{"Posted 2024-01-25"}</p></div>
                                <div className="flex items-center gap-1">Expire 2024-01-30</div>

                            </div>
                            <div className="flex items-center gap-1.5 ">
                                <Button className="bg-gray-300 text-gray-700"><span><User size={16}/></span>View Applicant</Button>
                                <Button className="bg-gray-300 text-gray-700"><span><Pencil size={16}/></span>Edit</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default JobsTab
