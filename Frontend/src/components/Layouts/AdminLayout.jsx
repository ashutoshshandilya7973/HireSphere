import React from 'react'
import SideBar from '../SideBar'
import { menus } from '../Hr/constant/menu'
import  Header from "../Hr/Header"
import useScreenSize from '../../hooks/useScreenSize'
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
                    {children}
                </div>
                
            </div>
            

        </div>
    )
}

export default AdminLayout
