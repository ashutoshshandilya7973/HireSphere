import React, { useEffect, useState } from 'react'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { X, Plus } from 'lucide-react'
import { useFieldArray } from 'react-hook-form'
const DynamicListField = ({ name, inputPlaceholder, btnPlaceholder, register, control }) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name
    })
    const addListhandler = () => {
        append({ value: '' });
    };
    useEffect(() => {
        if (fields.length === 0) append({ value: '' })
    }, [])
    return (
        <div className='flex flex-col justify-center'>
            {
                fields.map((item, idx) => {
                    return (
                        <div className="mb-2 flex gap-2 items-center" key={item.id}>
                            <Input placeholder={inputPlaceholder} {...register(`${name}.${idx}.value`)} />
                            {fields.length > 1 && <X className='hover:bg-gray-400 hover:rounded-[5px]' onClick={() => remove(idx)} />}
                        </div>
                    )
                })
            }
            <Button type="button" className="flex items-center bg-gray-500 mt-2.5" onClick={addListhandler}>
                <span><Plus /></span>
                {btnPlaceholder}
            </Button>
        </div>
    )
}

export default DynamicListField
