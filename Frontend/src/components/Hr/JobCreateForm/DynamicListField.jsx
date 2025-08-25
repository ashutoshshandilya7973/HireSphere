import React, { useState } from 'react'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { X, Plus } from 'lucide-react'
const DynamicListField = ({ inputPlaceholder, btnPlaceholder }) => {
    const [items, setItems] = useState([{}])
    function addListhandler() {
        setItems(prev => [...prev, { id: items.length + 1, content: "" }])
    }
    return (
        <div className='flex flex-col justify-center'>
            {
                items.map((item,idx) => {
                    return (
                        <div className="mb-2 flex gap-2 items-center" key={idx}>
                            <Input placeholder={inputPlaceholder} />
                            {items.length>1&& <X className='hover:bg-gray-400 hover:rounded-[5px]'/>}
                        </div>
                    )
                })
            }
            <Button className="flex items-center bg-gray-500 mt-2.5" onClick={addListhandler}>
                <span><Plus /></span>
                {btnPlaceholder}
            </Button>
        </div>
    )
}

export default DynamicListField
