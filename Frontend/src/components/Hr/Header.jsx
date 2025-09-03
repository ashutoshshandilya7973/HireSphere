import React from 'react'
import { menus } from './constant/menu'
import useScreenSize from '../../hooks/useScreenSize'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'
const Header = () => {
    const { isMobile } = useScreenSize()

    return (

        <div className="flex flex-col">
            <div className='flex justify-between items-center p-2'>
                <div className="flex gap-4">
                    <p className='text-[18px] text-gray-500 font-bold font-roboto'>HireSphere</p>
                </div>
                <div className="">

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button varient="" className="bg-white text-gray-700 font-roboto hover:bg-black hover:text-white border-none">
                                <span><Settings /></span>
                                Hr-Admin
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <p className="">Hr Admin</p>
                                <p>ashutoshjha7970@gmaii.com</p>
                            </DropdownMenuLabel>
                            <DropdownMenuGroup>
                                {
                                    isMobile && menus.map((menu, index) => {
                                        return <DropdownMenuItem key={index} className="bg-gray-50 hover:bg-gray-300 cursor-pointer m-0.5">{menu}</DropdownMenuItem>
                                    })
                                }
                                <DropdownMenuItem className="text-red-500">Sign out</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </div>
            <div className=" w-full border-[1px] mt-2"></div>
        </div>
    )
}

export default Header
