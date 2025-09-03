import React from 'react'
import SideBar from '../SideBar'
import useScreenSize from '../../hooks/useScreenSize'
import Header from '../Hr/Header'
import { menus } from '../Hr/constant/menu'
import useFetchJobs from '../../hooks/useFetchJobs'
import Body from '../Hr/Body'
const AdminLayout = ({ children }) => {
    const { isMobile } = useScreenSize()
    return (
        <div className='w-full min-h-screen flex flex-1 bg-sky-50/70  '>
            {
                !isMobile && (
                    <div className="flex-1">
                        <SideBar title="Hr Dashboard" label="Recruiting Suite" className={!isMobile ? "translate-x-0" : "-translate-x-full"} menus={menus} />

                    </div>
                )
            }
            <div className=" w-full flex-4 ">
                <Header />
                <div className="max-w-[90%] m-auto">
                    <Body/>
                </div>
                
            </div>
            

        </div>
    )
}

export default AdminLayout
