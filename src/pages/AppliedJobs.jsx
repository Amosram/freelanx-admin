import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { LiaFileAlt } from "react-icons/lia";
import { LuFolderSymlink } from "react-icons/lu";


const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [error, setError] = useState('');
  const serverUrl = 'https://freelanx-server.onrender.com';

  const fetchAllAppliedJobs = async () => {

    try {
      const res = await axios.get(serverUrl + '/api/jobs/admin/all-applied-jobs');
      setAppliedJobs(res.data);
   
    } catch (err) {
      setError(err.response?.data.msg || 'Failed to fetch applied jobs');
      console.error('All applied jobs fetch error:', err);
    }
  };

  useEffect(() => {
    fetchAllAppliedJobs();
    console.log(appliedJobs)
  }, []);

  return (
    <div>
        <h1 className='font-medium mb-4'>All Applied Jobs</h1>
        <div className='flex flex-col gap-4'>
            {
                appliedJobs.map((job, index) => (
                    <div key={index} className='border border-gray-300 shadow-sm px-4 py-1'>
                        <h1 className='text-grad font-medium mb-3'>{job.title}</h1>
                        <p className='flex gap-2'>
                            <strong>Skills:</strong>
                            {job.requiredSkills}
                        </p>
                        <p className='flex gap-1'>
                            <strong>Posted on:</strong>
                            {new Date(job.date).toLocaleDateString()}
                        </p>

                        <ul>
                            {
                                job.applications.map((app, index) => (
                                    <li key={index}>
                                        <p className='flex gap-2'>
                                            <strong>Name:</strong>
                                            <p className='flex gap-1'>
                                                <span>{app.firstName}</span>
                                                <span>{app.secondName}</span>
                                            </p>    
                                        </p>
                                        <p className='flex gap-2'>
                                            <strong>Email:</strong>
                                            <p className='flex gap-1'>
                                                <span>{app.email}</span>
                                            </p>    
                                        </p>
                                        <p className='flex gap-2'>
                                            <strong>Address:</strong>
                                            <p className='flex gap-1'>
                                                <span>{app.city}</span>
                                                <span>{app.street}</span>
                                                <span>{app.zipcode}</span>
                                            </p>
                                        </p>
                                        <p className='flex items-center gap-2'><strong>Resume:</strong> <a href={app.resume} target="_blank" className='flex items-center gap-1 bg-purple-200 px-3 border border-gray-300 rounded-2xl' rel="noopener noreferrer">
                                            <span>view</span>
                                            <LuFolderSymlink className='text-sm'/>
                                        </a></p>
                                        <p>
                                            <strong>Cover Letter:</strong>
                                            <span>{app.message}</span>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AppliedJobs