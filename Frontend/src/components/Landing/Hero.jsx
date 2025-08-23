import React from 'react'
import { Search, Briefcase } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const Hero = () => {
    return (
        <section className='w-[90%] md:max-w-5xl m-auto text-center mt-16 md:mt-20'>
            <h1 className='font-roboto  font-medium text-4xl/12  md:text-5xl/16 max-w-3xl text-center m-auto'>Find Your Next Gig with our Freelance Job Platform</h1>
            <p className='text-center max-w-[600px] m-auto text-gray-300 mt-8 text-[18px] md:text-[20px]  leading-8 text-shadow-gray-400 text-shadow-lg/20 '>Connect with top employers and discover opportunities that match your skills and aspirations. Start your
                career journey today.</p>
            <div className=" w-[90%] md:mx-w-3xl m-auto bg-linear-to-r from-gray-500 to-gray-700 p-5 rounded-sm mt-20 shadow-lg shadow-gray-300/20">
                <div className=" flex flex-col md:flex-row items-center gap-2.5 justify-between ">
                    <div className="relative w-full  md:w-[38%] ">
                        <Search className='absolute left-3 top-2 h-5 w-5 ' />
                        <Input className="pl-10 text-white placeholder:text-white border-none shadow-lg" placeholder="Jobtitle Keyword or Company" />
                    </div>
                    <div className="relative w-full md:w-[38%]">
                        <Search className='absolute left-3 top-2 h-5 w-5' />
                        <Input className="pl-10 text-white placeholder:text-white border-none shadow-lg" placeholder="Location" />
                    </div>
                    <Button size="lg" className="w-full md:w-[20%] cursor-pointer bg-green-400 hover:bg-green-300">
                        <Search className='h-4 w-4 mr-2' />
                        Search job
                    </Button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-5 text-sm text-muted-foreground">
                <span>•</span>

                <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    1,000+ Active Jobs
                </span>
                <span>•</span>
                <span>500+ Companies</span>
                <span>•</span>
                <span>New Jobs Daily</span>
            </div>
        </section>
    )
}

export default Hero
