import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from 'react-toastify';
import axios from 'axios'
import { RiErrorWarningFill } from "react-icons/ri";


const ListJobs = ({token}) => {
  const [jobList, setJobList] = useState([])

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://freelanx-server.onrender.com/api/jobs/list");
      if (response.data.success) {
        toast.success(response.data.message)
        setJobList(response.data.allJobs)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeJob = async (id) => {
  
    try {
      const response = await axios.delete(`https://freelanx-server.onrender.com/api/jobs/remove/${id}`, {headers:{token}});

      if (response.data.success) {
        toast.success(response.data.message);
        //after deleting produc successifully we call the fetchlist function to update it
        await fetchJobs();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <div>
      <h1 className='font-medium'>All Jobs</h1>

      <div className='mt-8 flex flex-col gap-3'>

        {
          jobList.map((job, index) => (
            <div key={index} className='flex items-center justify-between border border-gray-300 px-4 py-[4px]'>
              <div>
                <h1 className='text-grad font-medium'>{job.jobTitle}</h1>
                <div>
                  <p className='text-sm'>{job.location}</p>
                  <p className='text-sm flex items-center gap-1'>
                    <RiErrorWarningFill className='text-red-400'/>
                    {job.deadline}</p>
                </div>
                
              </div>
              <RiDeleteBin6Line onClick={()=> removeJob(job._id)} className='text-red-400 text-xl cursor-pointer'/>
            </div>
          ) )

        }
       
      </div>
    </div>
  )
}

export default ListJobs