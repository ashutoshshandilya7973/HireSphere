import React from 'react'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { Button } from '../../components/ui/button'
import { Briefcase, Target, Award, Users, Eye, Save, Send } from "lucide-react"
import BasicsTab from '../../components/Hr/JobCreateForm/Tabs/BasicsTab'
import DetailsTab from '../../components/Hr/JobCreateForm/Tabs/DetailsTab'
import RequirementsTab from '../../components/Hr/JobCreateForm/Tabs/RequirementsTab'
import SettingsTab from '../../components/Hr/JobCreateForm/Tabs/SettingsTab'
import { zodResolver } from "@hookform/resolvers/zod"; 
import {  useForm } from 'react-hook-form'
import { hrJobSchemaWithSalaryCheck } from '../../lib/PostJob.validation'
const CreateJobPost = () => {
  const { register, handleSubmit, watch, setValue,reset, control, formState: { errors } } = useForm({
    defaultValues: {
      responsibility: [{ value: "" }],
      benifit: [{ value: '' }],
      qualification:[{value:""}],
      skills:[''],
    },
    resolver:zodResolver(hrJobSchemaWithSalaryCheck)

  })
  const onError = (errors) => {
  console.log("Validation Errors:", errors);
};
  function onSubmit(data) {
    console.log(data)
    reset()
  }
  return (
    <section className='w-full min-h-screen bg-linear-to-r from-gray-900 to-black text-white overflow-hidden'>
      <h1 className='max-w-[90%] md:w-5xl m-auto font-roboto text-4xl font-medium mt-5 md:mt-10'>Create Job Post</h1>
      <p className='max-w-[90%] md:w-5xl m-auto font-roboto text-[18px]  mt-3 text-gray-400'>Fill out the details below to create a comprehensive job posting that attracts the right candidates.</p>
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
          <form id="myform" onSubmit={handleSubmit(onSubmit,onError)}>
            <TabsContent value="basics" className="">
              <BasicsTab register={register} control={control} />
            </TabsContent>
            <TabsContent value="details">
              <DetailsTab register={register} control={control} />
            </TabsContent>
            <TabsContent value="requirements">
              <RequirementsTab register={register} control={control} watch={watch} setValue={setValue}/>
            </TabsContent>
            <TabsContent value="settings">
              <SettingsTab register={register} control={control} setValue={setValue}/>
            </TabsContent>
          </form>
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
          <Button type="submit" form="myform" className="bg-gray-700">
            <span><Send /></span>
            Publish job
          </Button>
        </div>
      </div>

    </section>
  )
}

export default CreateJobPost
