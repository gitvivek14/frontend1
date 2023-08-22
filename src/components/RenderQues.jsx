import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import _ from 'underscore';
import Tab from './Tab';
import { correct, correctl } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';



const RenderQues = ({setquestionno,email1,max,questionno}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("printing ques no",questionno)
  questionno = parseInt(questionno)+1;
  console.log("printing ques no next",questionno)
  const [formdata, setFormdata] = useState({
    bet:"",
  })
  const{loading} = useSelector((state)=>state.auth)
  const bet = formdata.bet
  let min = (0.4*max)
  let maxi = max;
  if(max<=1000){
    min = max;
  }
  const {question} = useSelector((state)=>state.auth, _.isEqual);
  console.log("printing",question)
  const [option, setoption] = useState(question?.optionOne)
  console.log("printing question",question)
  
  const betchange = (e)=>{
    const value = e.target.value;
      setFormdata((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  const tabData = [
    {
      id: 1,
      tabName: question?.optionOne,
      
    },
    {
      id: 2,
      tabName: question?.optionTwo,
      
    },
    {
      id:3,
      tabName:question?.optionThree
    },
    {
      id:4,
      tabName:question?.optionFour
    }
  ]
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(question?.questionNo==="15"){
      dispatch(correctl(question?.questionNo,option,bet,email1,navigate))
    }else{
      dispatch(correct(question?.questionNo,option,bet,email1))
      console.log("in submiy",questionno)
      setquestionno(questionno)
    }
  }

  if(loading===true){
    return(
        <Loading></Loading>
    )
}
  return (
    <div className='w-11/12 p-8 mt-16 flex flex-col items-center justify-center  mx-auto'>
      {/* question */}
      <div className='mb-0'>
        <h1 className='text-red-700 text-lg'>Question {question?.questionNo} of 15</h1>
      </div>

      <div className='flex flex-wrap w-full items-center justify-center mb-0'>
        <div className='flex items-center justify-center bg-richblack-800 p-5
         text-richblack-25 rounded-xl gap-x-2 shadow-2xl outline-2 outline-white border-spacing-1 backdrop-blur-xl mt-3 mb-0'>
          <p>Ques.</p>
        <p>
          {
            question?.question
          }
          ?
        </p>
        </div>
        
        <Tab tabdata={tabData} option={option} setoption={setoption}> 
        </Tab>
        {
          console.log("is option changing",option)
        }

      </div> 

      <div className='flex flex-col gap-3 '>
        <p className='text-richblack-800 text-lg'>Bet the Amount: </p>
        <form onSubmit={handlesubmit} className='flex flex-col items-center justify-center'>
          <label></label>
          <input type='number' 
          inputMode='numeric'
          placeholder='Enter Your Amount' 
          min={min}
          max={max}
          step='any'
          value={bet} onChange={betchange} required name='bet' 
          className='w-full rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px]
          text-richblack-5 shadow-[0_1px_0_0] shadow-white/50
           placeholder:text-richblack-200 focus:outline-none !pr-10'>
          </input>
          <button type='submit' 
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
            Submit Your Answer
          </button>
        </form>
        </div> 
    </div>
  )
}


export default RenderQues