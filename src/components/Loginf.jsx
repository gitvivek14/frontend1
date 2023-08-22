import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../services/operations/authApi'
import { useDispatch } from "react-redux"
const Loginf = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formdata, setFormdata] = useState({
        email:"",
        password:"",
    })    
    const [showpass, setSetshowpass] = useState(false)
    const {email,password} = formdata;
    const handlechange = (e)=>{
        setFormdata((prev)=>({
            ...prev ,
            [e.target.name]:e.target.value,
        }))
    }

    const handleonsubmit = (e)=>{
        e.preventDefault();
        dispatch(login(email,password,navigate))
    }

  return (
   <form className='mt-6 flex w-full flex-col gap-y-4' onSubmit={handleonsubmit}>
    <label className='w-full'>
    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
    <input required type='text'
    name='email' 
    value={email}
    onChange={handlechange}
    placeholder='Enter Your Leader Email'
    className='w-full rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px]
    text-richblack-5 shadow-[0_1px_0_0] shadow-white/50
     placeholder:text-richblack-200 focus:outline-none '></input>
    </label>


    <label className='relative'>
    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
    <input required type={showpass ? "text" : "password"}
    name='password'
    value={password}
    onChange={handlechange}
    placeholder='Enter password'
    className='w-full rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px]
    text-richblack-5 shadow-[0_1px_0_0] shadow-white/50
     placeholder:text-richblack-200 focus:outline-none !pr-10'></input>

     <span onClick={()=>setSetshowpass((prev)=>!prev)}
     className='absolute right-3 top-[38px] z-[10] cursor-pointer'>
        {
            showpass? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>
            ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
            )
        }
     </span>
    </label>

    <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 
        py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Log In
      </button>

   </form>
  )
}

export default Loginf