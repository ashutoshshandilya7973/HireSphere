import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import useUserStore from '../stores/useUserStore'

const useFetchJobs = () => {
    const { id } = useUserStore()
    const [data,setData]=useState([])

    useEffect(() => {
        async function user() {
            let { data, error} = await supabase
            .from('Hr-Job-Post')
            .select("*")
            if(error){
                console.log("error occurs while fetching the job data",error)
                return
            }
            return data
        }
        const data=user();
        setData(data)

    }, [])
return {data}
}

export default useFetchJobs
