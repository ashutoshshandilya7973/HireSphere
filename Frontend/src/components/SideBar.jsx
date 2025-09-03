import React, { useState } from 'react'
import { cn } from '../lib/utils'
const SideBar = ({ title, label, menus = ["Overview","hebfheb","wbehweb","ebhwebfh","wjenfjwn"], children, className }) => {
    const [active, setActive] = useState(menus[0])
    return (

        <div className={cn(`flex font-roboto transform transition-transform duration-1000 ease-in-out ${className}`)}>
            <div className='min-h-screen flex-1 mt-4'>
                <h2 className='text-[22px] text-gray-700 font-bold mx-5'>{title}</h2>
                <p className='text-[16px] text-gray-600 mx-5'>{label}</p>
                <div className="min-w-full mt-4 h-0.2 border-1 border-gray-200"></div>
                <div className="flex flex-col gap-2 my-4 mx-2">
                     {
                    menus.map((menu, index) => {
                        return (
                            <div key={index} onClick={()=>setActive(menu)} className={`p-2 rounded-[4px] cursor-pointer text-gray-600 ${active === menu ? "text-green-500 bg-green-100" : " hover:bg-gray-200"  }`}>
                                {menu}
                            </div>
                        )
                    })
                }
                </div>
                {/* here i have to give the class so that it can align at the bottom */}
                <div className="">
                    {children}
                </div>
            </div>
            <div className="min-h-screen w-0.5 border-1 border-gray-200"></div>
        </div>

    )
}

export default SideBar
