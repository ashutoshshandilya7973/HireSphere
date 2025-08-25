import React from 'react'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { Button } from '../../components/ui/button'
import { Briefcase, Target, Award, Users, Eye, Save, Send } from "lucide-react"
import BasicsTab from '../../components/Hr/JobCreateForm/Tabs/BasicsTab'
import DetailsTab from '../../components/Hr/JobCreateForm/Tabs/DetailsTab'
import RequirementsTab from '../../components/Hr/JobCreateForm/Tabs/RequirementsTab'
import SettingsTab from '../../components/Hr/JobCreateForm/Tabs/SettingsTab'

const CreateJobPost = () => {
  return (
    <section className='w-full min-h-screen bg-linear-to-r from-gray-900 to-black text-white overflow-hidden'>
      <h1 className='max-w-[90%] md:w-5xl m-auto font-roboto text-4xl font-medium mt-5 md:mt-10'>Create Job Post</h1>
      <p className='max-w-[90%] md:w-5xl m-auto font-roboto text-[18px]  mt-3 text-gray-400'>Fill out the details below to create a comprehensive job posting that attracts the right candidates.</p>
      {/* make responsive for the mobile views */}
      <div className="md:w-5xl m-auto mt-7">
        <Tabs defaultValue="basics" className="">
          <TabsList className="w-5xl  gap-2.5 bg-gray-300 ">
            <TabsTrigger value="basics" className="flex items-center gap-2.5">
              <span ><Briefcase /></span>
              Basics
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2.5">
              <span ><Target /></span>

              Details</TabsTrigger>
            <TabsTrigger value="requirements" className="flex items-center gap-2.5">
              <span ><Award /></span>
              Requirements</TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2.5">
              <span ><Users /></span>
              Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="basics" className="">
            <BasicsTab />
          </TabsContent>
          <TabsContent value="details">
            <DetailsTab />
          </TabsContent>
          <TabsContent value="requirements">
            <RequirementsTab />
          </TabsContent>
          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
      {/* <div className='h-[1px] w-full bg-white max-w-[90%] md:w-5xl m-auto mt-5 '></div> */}
      <div className="  max-w-[90%] md:w-5xl m-auto mt-10 flex justify-between">
        <div className="flex items-center gap-3.5">
          <Button className="bg-gray-400">
            <span><Eye /></span>
            Preview
          </Button>
          <Button className="bg-gray-400">Cancel</Button>
        </div>
        <div className="flex items-center gap-3.5">
          <Button className="bg-gray-400">
            <span><Save /> </span>
            Save as draft
          </Button>
          <Button className="bg-gray-700">
            <span><Send /></span>
            Publish job
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CreateJobPost
