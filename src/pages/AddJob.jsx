import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { serverUrl } from '../App'
import axios from 'axios'

const AddJob = ({token}) => {

  const [jobs, setJobs] = useState({
    jobTitle: '',
    jobType: '',
    qualifications: '',
    experience: '',
    location: '',
    jobDescription: '',
    salary: '',
    category:'',
    responsibilities: [],
    requiredSkills:[],
    deadline:''
  })

  const [jobTitle, setJobTitle] = useState("")
  const [jobType, setJobType] = useState("")
  const [qualifications, setQualifications] = useState("")
  const [experience, setExperience] = useState("")
  const [location, setLocation] = useState("")
  const [salary, setSalary] = useState("")
  const [category, setCategory] = useState("")
  const [deadline, setDeadline] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [responsibilities, setResponsibilities] = useState([])
  const [requiredSkills, setRequiredSkills] = useState([])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setJobs({ ...jobs, [name]: value });
  };

  const handleSubmit = async (e) => {
    const response = await axios.post('https://freelanx-server.onrender.com/api/jobs/add', jobs, {headers:{token}});
    if (response.data.success) {
      setJobTitle("");
      setJobType("");
      setQualifications("");
      setExperience("");
      setJobDescription("");
      setLocation("");
      setSalary("");
      setDeadline("");
      setResponsibilities([]);
      toast.success(response.data.message);
      alert("Job was added successifully")
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3 font-medium">
      <div className='flex flex-col gap-3'>
        <label>Job Title</label>
        <input onChange={handleChange} name="jobTitle" value={jobs.jobTitle} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Job Type</label>
        <input onChange={handleChange} name="jobType" value={jobs.jobType} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Job Category</label>
        <input onChange={handleChange} name="category" value={jobs.category} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Qualifications</label>
        <input onChange={handleChange} name="qualifications"  value={jobs.qualifications} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Experience</label>
        <input onChange={handleChange} name="experience"  value={jobs.experience} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Location</label>
        <input onChange={handleChange} name="location"  value={jobs.location} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Salary</label>
        <input onChange={handleChange} name="salary"   value={jobs.salary} type='number' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Who We Are</label>
        <textarea onChange={handleChange} name="jobDescription"  value={jobs.jobDescription} type='text' className='border border-gray-300 px-4 py-[2.3px] resize-none' required rows={5} cols={22}></textarea>
      </div>

      <div className='flex flex-col gap-3'>
        <label>Responsibilities</label>
        <textarea onChange={handleChange} name="responsibilities"  value={jobs.responsibilities} type='text' className='border border-gray-300 px-4 py-[2.3px] resize-none' required rows={5} cols={22}></textarea>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Skills</label>
        <input onChange={handleChange} name="requiredSkills"  value={jobs.requiredSkills} type='text' className='border border-gray-300 px-4 py-[2.3px]' required/>
      </div>
      <div className='flex flex-col gap-3'>
        <label className="flex gap-1">
          Deadline
          <span className='text-red-600'>*</span>
        </label>
        <input onChange={handleChange} name="deadline" value={jobs.deadline} type='text' className='border border-gray-300 px-4 py-[2.3px]' />
      </div>
      <button type='submit' className='mt-4 bg-grad w-[25%] text-gray-50 cursor-pointer py-[2px]'>Add Job</button>
    </form>
  )
}

export default AddJob