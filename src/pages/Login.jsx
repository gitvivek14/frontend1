import React,{Component,useState} from 'react'
import loginimg from '../assets/forms/login.png'
import frame from '../assets/forms/frame.png'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import {login} from '../services/operations/authApi'
import iste from '../assets/forms/iste_logo_white.png'

const Login  = () => {
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
      console.log("submitting form from template")
      dispatch(login(email,password,navigate))
  }
  return (
    <div className='w-full bg-richblack-900 h-screen flex items-center justify-center relative flex-col'>
      <div>
        {/* <!-- Background image --> */}
        <img src={iste}
        ></img>
      </div>
       <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto 
    gap-x-20 gap-y-0  bg-richblack-900 items-center justify-center'>
      <div className='w-11/12 max-w-[450px] mx-0'>
        <h1 className='text-richblack-100 font-semibold text-[1.875rem] leading-[2.375rem] flex items-center justify-center'>Login</h1>
        <form className='mt-6 flex w-full flex-col gap-y-4' onSubmit={handleonsubmit}>
    <label className='w-full'>
    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
    <input required
     type='text'
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
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
            ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>
            )
        }
     </span>
    </label>

    <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 
        py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Start the Game
      </button>

   </form>
        
       
        










      </div>
      {/* <div className='relative w-11/12 max-w-[450px] '>
        <img src={frame}
        loading='lazy' width={558} height={584} >
        </img>

        <img  src={loginimg} alt='ab' loading='lazy' 
        width={558} height={490} className='absolute -top-4 right-4'></img>
      </div> */}
      
    </div>

    </div>
   
  )
}

// class Login extends Component{
//   render(){
//     return(
//       <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto 
//       gap-x-20 gap-y-0 justify-between'>
//         <div className='w-11/12 max-w-[450px] mx-0'>
//           <h1 className='text-richblack-100 font-semibold text-[1.875rem] leading-[2.375rem]'>Login</h1>
          
//         </div>
  
//         <div className='relative w-11/12 max-w-[450px] '>
//           <img src={frame}
//           loading='lazy' width={558} height={584} >
//           </img>
  
//           <img  src={login} alt='ab' loading='lazy' 
//           width={558} height={490} className='absolute -top-4 right-4'></img>
//         </div>
        
//       </div>

//     )

//   }

// }

export default Login
