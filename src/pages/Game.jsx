import { type } from '@testing-library/user-event/dist/type';
import React , {useState , useEffect, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'underscore';
import RenderQues from '../components/RenderQues';
import {getnewquestion} from '../services/operations/authApi'
import {setquestionno} from '../slices/authSlice'

import Loading from '../components/Loading';
const Game = () => {
    const dispatch = useDispatch()
    const [Question, setQuestion] = useState("#244");
    const [formdata, setformdata] = useState({check:false})
    const [signupData1, setSignupData] = useState(null);
    const [questionno, setquestionno] = useState("1");
    const {signupData} = useSelector((state)=>state.auth , _.isEqual);
    const{game} = useSelector((state)=>state.auth)
    const{questionnoo} = useSelector((state)=>state.auth)
    const{loading} = useSelector((state)=>state.auth)
    


    useEffect(()=>{
        dispatch(getnewquestion(parseInt(questionno)));
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[questionnoo,dispatch,questionno]);

    // console.log("ques no changed",questionnoo);
    // console.log("sign up",signupData);

    if(loading===true){
        return(
            <Loading></Loading>
        )
    }
  return (
    <div className="w-full">
    <div className='w-11/12 flex items-center justify-evenly mx-auto max-w-[1080px] p-8 
     relative  bg-richblack-700 text-richblack-5 mt-4 border-2 rounded-3xl border-richblack-300'>
        <div className='font-semibold'>
        <h3>
           TeamName : {signupData.teamName}
        </h3>
        </div>
        <div>
            <p>
                Question No : {questionno} of 20
            </p>
        </div>
        <div>
            <p>
                Score: {game.teamPoints}
            </p>
        </div>
       
    </div>
    {
        questionno && <RenderQues setquestionno={setquestionno} email1={signupData.email1} max={game.teamPoints} questionno={questionno}></RenderQues>
    }
    
    
</div>
  )
}

export default Game
