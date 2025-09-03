import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { Button } from '../../components/ui/button'
import { Briefcase, Target, Award, Users, Eye, Save, Send } from "lucide-react"
import BasicsTab from '../../components/Hr/JobCreateForm/Tabs/BasicsTab'
import DetailsTab from '../../components/Hr/JobCreateForm/Tabs/DetailsTab'
import RequirementsTab from '../../components/Hr/JobCreateForm/Tabs/RequirementsTab'
import SettingsTab from '../../components/Hr/JobCreateForm/Tabs/SettingsTab'
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from '../../utils/supabase'
import { FormProvider, useForm } from 'react-hook-form'
import { hrJobSchemaWithSalaryCheck } from '../../lib/PostJob.validation'
import useUserStore from '../../stores/useUserStore'
import { toast } from 'sonner'
const CreateJobPost = () => {
  
  const { id } = useUserStore()
  console.log("x")
  const methods = useForm({
    defaultValues: {
      title: "",
      department: "",
      location: "",
      jobType: "",
      experienceLevel: "",
      minSalary: "",
      maxSalary: "",
      currency: "USD",
      remoteWork: false,
      urgentHiring: false,
      jobDescription: "",
      responsibility: [{ value: "" }],
      benifits: [{ value: '' }],
      qualification: [{ value: "" }],
      skills: [''],
      deadlineDate: "",
      startDate: "",
      skillAssessment: false,
      companyDescription: "",
      user_id:id
    },
    resolver: zodResolver(hrJobSchemaWithSalaryCheck)

  })
  const { register, handleSubmit, watch, setValue, reset, control, formState: { errors } } = methods

  async function onSubmit(data1) {

    console.log(data1)
    const { data, error } = await supabase.from('Hr-Job-Post').insert(data1).select();
    if (error) {
      console.log("error occuring while inserting the row in job post table", error);
      return;
    }else{
      toast("course is created successfully")
    }
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
          <FormProvider {...methods}>
            <form id="myform" onSubmit={handleSubmit(onSubmit)}>
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
              {/* Move the buttons here */}
              <div className="  max-w-[90%] md:w-5xl m-auto mt-10 flex justify-between">
                <div className="flex items-center gap-3.5">
                  <Button className="bg-gray-400" type="button">
                    <span><Eye /></span>
                    Preview
                  </Button>
                  <Button className="bg-gray-400" type="button">Cancel</Button>
                </div>
                <div className="flex items-center gap-3.5">
                  <Button className="bg-gray-400" type="button">
                    <span><Save /> </span>
                    Save as draft
                  </Button>
                  <Button className="bg-gray-700" type="submit">
                    <span><Send /></span>
                    Publish job
                  </Button>
                </div>
              </div>
            </form>
            {Object.keys(errors).length > 0 && (
              <pre className="text-red-500">{JSON.stringify(errors, null, 2)}</pre>
            )}
          </FormProvider>
        </Tabs>
      </div>
      {/* <div className='h-[1px] w-full bg-white max-w-[90%] md:w-5xl m-auto mt-5 '></div> */}

    </section>
  )
}

export default CreateJobPost
