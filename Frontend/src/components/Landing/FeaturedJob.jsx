import React, { useState } from 'react'
import { featuredJobs } from './constant'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge'
import { Building, DollarSign, LocateIcon, MapPin, Watch } from 'lucide-react';
import { Button } from '../ui/button';
const FeaturedJob = () => {
    const [cardData, setCardData] = useState(featuredJobs);
    return (
        <section className='max-w-7xl m-auto mt-20'>
            <div className=" text-center ">
                <h2 className='font-roboto text-4xl font-semibold'>Featured Job Opportunities</h2>
                <p className='font-garamond text-gray-300 max-w-xl md:max-w-2xl m-auto text-xl mt-2.5'>Discover your next career move with our curated selection of job openings from top companies.</p>
            </div>
            {/* card of featured job */}

            <div className=" flex flex-col flex-wrap md:flex-row justify-between gap-4 mt-20 items-stretch">
                {
                    cardData.map((card) => {
                        return (
                            <Card key={card.id} className="w-[80%] flex-1 m-auto md:w-1/3 bg-gray-500 flex flex-col h-full">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="">
                                            <CardTitle className="font-medium text-[20px]">{card.title}</CardTitle>
                                            <div className=" flex items-center gap-2 mt-2">
                                                <Building className='h-4 w-4' />
                                                <span className='text-[16px]'>{card.company}</span>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="bg-black text-white p-1" >{card.type}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className=" flex items-center gap-2 ">
                                            <MapPin className='w-4 h-4' />
                                            <span className='text-[16px]'>{card.location}</span>
                                        </div>
                                        <div className=" flex items-center gap-2 ">
                                            <DollarSign className='w-4 h-4' />
                                            <span className='text-[16px]'>{card.salary}</span>
                                        </div>
                                        <div className=" flex items-center gap-2 ">
                                            <Watch className='w-4 h-4' />
                                            <span className='text-[16px]'>{card.posted}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm  line-clamp-2 mt-2.5">{card.description}</p>
                                    <div className="flex flex-wrap items-start gap-1 mt-2.5">
                                       {
                                        card.skills.slice(0,3).map((skill,index)=>{
                                            return (
                                                <Badge key={index} variant="default" className="p-1.5 text-xs bg-black">{skill}</Badge>
                                            )
                                        })
                                       }
                                       {
                                        (card.skills.length>3)&&(
                                            <Badge variant="default" className="p-1.5 text-xs text-center bg-black">+{card.skills.length-3}more</Badge>
                                        )
                                       }

                                    </div>
                                    <div className=" flex gap-2.5 mt-2.5">
                                        <Button className="flex-1 bg-green-500">View Details</Button>
                                        <Button className="bg-gray-700">Save</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )

                    })
                }

            </div>
        </section>
    )
}

export default FeaturedJob
