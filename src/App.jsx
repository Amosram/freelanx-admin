import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddJob from './pages/AddJob'
import ListJobs from './pages/ListJobs'
import Login from './components/Login'
import SideBar from './components/SideBar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppliedJobs from './pages/AppliedJobs'

export const serverUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const checkToken = localStorage.getItem('token')? localStorage.getItem('token'):"";
  const [token, setToken] = useState(checkToken);
  
  useEffect(()=>{
    localStorage.setItem("token", token);
  },[token])

  return (
    <div className='text-slate-900 bg-gradient-to-b from-white to-slate-200'>
      <ToastContainer />
      {
        token === "" ?
        <Login setToken={setToken}/>
        :
        <>
          <Navbar setToken={setToken}/>

          <div className='flex w-full'>
              <SideBar/>
              <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                <Routes>
                  <Route path='/add' element={<AddJob token={token}/>} />
                  <Route path='/list' element={<ListJobs token={token}/>} />
                  <Route path='/applied-jobs' element={<AppliedJobs token={token}/>} />
                </Routes>
              </div>
            </div>
        </>
      }
     

    </div>
  )
}

export default App