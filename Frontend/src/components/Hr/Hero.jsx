import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button';
import { Rocket, Target, Plus, Zap, Activity, Users, Clock} from 'lucide-react'
import { Card ,CardContent } from '../ui/card';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        let x = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 3)
        }, 3000)

        return () => { clearInterval(x) }
    }, [])
    return (
        <div className="">
            <section>
                <h1 className='w-[90%] md:max-w-5xl mt-10 font-roboto text-4xl font-semibold text-gray-300 m-auto'>HR Admin Dashboard</h1>
                <p className=' w-[90%] md:max-w-5xl m-auto text-gray-300 mt-4 text-[18px] md:text-[18px]  leading-8 text-shadow-gray-400 text-shadow-lg/20 '>Manage job postings, review applications, and track hiring progress  </p>
                <div className="p-5 md:p-10 w-full md:max-w-5xl mt-12 m-auto bg-linear-to-r from-gray-400 to-gray-700 rounded-sm">
                    <div className="w-32 h-32 m-auto gradient-primary rounded-full flex items-center justify-center mb-8 animate-pulse-glow">
                        <Rocket className='h-16 w-16 text-white' />
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-[80%] m-auto md:mb-5">
                        <h2 className='text-3xl text-green-500 font-bold '>Welcome to Your HR Command Center!</h2>
                        <p className='text-[20px] font-medium text-center'>Transform your hiring process with our intelligent recruitment platform. Let's get you started on finding exceptional talent.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="p-2.5 md:p-4 w-full md:max-w-5xl mt-12 m-auto rounded-sm bg-linear-to-r from-gray-400 to-gray-700">
                    <div className="flex gap-2.5 items-center ">
                        <Target className='h-7 w-7 text-green-500 ' />
                        <h3 className='font-roboto text-2xl font-medium text-gray-300'>Your Journey to Hiring Success</h3>
                    </div>
                    <div className="flex gap-2.5 mt-4 p-2.5">
                        {
                            [0, 1, 2].map((steps) => {
                                return (
                                    <div className={`h-3 flex-1 rounded-full  transition-all duration-500 ${steps === currentStep ? "bg-primary" : "bg-muted"}`} key={steps}></div>
                                )
                            })
                        }
                    </div>
                    <div className="p-2.5 md:p-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div
                            className={`text-center p-8 border-2 rounded-xl transition-all duration-500 card-hover ${currentStep === 0 ? "border-primary bg-primary/5 scale-105" : "border-border"
                                }`}
                        >
                            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <Plus className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    1
                                </span>
                                <h3 className="text-xl font-bold">Create Your First Job</h3>
                            </div>
                            <p className="text-gray-900 mb-6 leading-relaxed">
                                Craft compelling job postings with our AI-powered description builder and attract top-tier candidates.
                            </p>
                            <Button className="w-full button-interactive gradient-primary text-white border-0 shadow-lg">
                                <a href="" className="flex items-center gap-2">
                                    <Zap className="h-4 w-4" />
                                    Start Creating
                                </a>
                            </Button>
                        </div>


                        <div
                            className={`text-center p-8 border-2 rounded-xl transition-all duration-500 card-hover ${currentStep === 1 ? "border-secondary bg-secondary/5 scale-105" : "border-border"
                                }`}
                        >
                            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="w-8 h-8 bg-secondary text-black rounded-full flex items-center justify-center text-sm font-bold">
                                    2
                                </span>
                                <h3 className="text-xl font-bold">Design Smart Assessments</h3>
                            </div>
                            <p className="text-gray-900 mb-6 leading-relaxed">
                                Create custom skill assessments and personality tests to identify the perfect cultural and technical
                                fit.
                            </p>
                            <Button
                                variant="outline"
                                className="w-full button-interactive border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                            >
                                <a href="" className="flex items-center gap-2">
                                    <Activity className="h-4 w-4" />
                                    Build Assessment
                                </a>
                            </Button>
                        </div>


                        <div
                            className={`text-center p-8 border-2 rounded-xl transition-all duration-500 card-hover ${currentStep === 2 ? "border-accent bg-accent/5 scale-105" : "border-border"
                                }`}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    3
                                </span>
                                <h3 className="text-xl font-bold">Manage Applications</h3>
                            </div>
                            <p className="text-gray-900 mb-6 leading-relaxed">
                                Review, score, and track candidates through your customizable hiring pipeline with ease.
                            </p>
                            <Button
                                variant="outline"
                                className="w-full button-interactive border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white bg-transparent"
                                disabled
                            >
                                <a href="" className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    Coming Soon
                                </a>
                            </Button>
                        </div>
                    </div>


                </div>
            </section>
            <section>
                <div className="mt-12">
                    <Card className="p-2.5 md:p-4 w-full md:max-w-5xl mt-12 m-auto rounded-sm bg-linear-to-r from-gray-400 to-gray-700">
                        <CardContent className="text-center py-12">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
                                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                                    Join thousands of HR professionals who've revolutionized their recruitment process. Your next great hire
                                    is just one click away.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="button-interactive bg-white text-primary hover:bg-white/90 shadow-lg"
                                    >
                                        <Link to="/admin-dashboard/create-job" className="flex items-center gap-3">
                                            <Plus className="h-5 w-5" />
                                            Create Your First Job
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="button-interactive border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                                    >
                                        <a href="/admin/workflow" className="flex items-center gap-3">
                                            <Target className="h-5 w-5" />
                                            View Full Workflow
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default Hero
