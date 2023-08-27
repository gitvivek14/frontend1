import React , {useState , useEffect, useMemo} from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import _ from 'underscore';
const Endgame = () => {
  const {game} = useSelector((state)=>state.auth);
  const {signupData} = useSelector((state)=>state.auth , _.isEqual);
  return (
   <div className='w-full bg-richblack-900 h-screen flex items-center justify-center  flex-col'>
    <div className='flex items-center justify-center mx-auto my-auto text-white gap-x-2 text-3xl flex-col'>
      <div className='flex gap-x-2'>
      <div className='text-white'>
      <h1>
        TeamName :
      </h1>

      </div>
      
     
      <div>
      {
        signupData.teamName
      }

      </div>

      </div>
     

      <div className='flex gap-x-2'>
        <p>Your Total Score is : </p>
        <div>
        <p>
          {
            game?.teamPoints
          }
        </p>
        </div>
        

      </div>

      <div className='mt-10 flex flex-col'>
        <div>
        <p>
          Thank You For Participating!!!
         
        </p>

        </div>
        <div>
        <p>
         We Hope You Enjoyed the Event.
        </p>
        </div>
       
      </div>
    </div>
   </div>
  )
}

export default Endgame
