import React from 'react'
import JobsTab from './JobsTab'
import { jobsTab } from './constant/menu'
const Body = ({title,label,actionsleft=[],actionRight=[],children}) => {
  return (
    <div className='mt-5 '>
        <div className="">
            <h1 className='text-3xl text-gray-600 font-semibold font-roboto'>Application Management</h1>
            <p className="text-[16px] text-gray-500 mt-1">Review candidates and manage the hiring process</p>
        </div>
        <div className="">
          <JobsTab jobsTab={jobsTab}/>
        </div>
      
    </div>
  )
}

export default Body
