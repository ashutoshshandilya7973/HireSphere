import React from 'react'
import { ErrorMessage } from "@hookform/error-message"
import useFormContext from '../hooks/useFormContext'

const Errormessage = ({ name }) => {
    const {formState:{errors}}=useFormContext()
    return (
        <div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className='text-sm text-red-500 mt-1'>{message}</p>
                )}
            />
            {/* <ErrorMessage
                name={`${name}.root`}
                render={({ message }) => (
                    <p className='text-sm text-red-500 mt-1'>{message}</p>

                )}
            /> */}
        </div>
    )
}

export default Errormessage
