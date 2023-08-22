import React , {useState , useEffect} from 'react'

export const Header = () => {
    const [Team, setTeam] = useState("Null");
    const [Question, setQuestion] = useState("#244");
    const [seconds, setseconds] = useState(60);
    const [points, setpoints] = useState(0);
    var maxseconds;
    const text = "Time's Up";
    
  useEffect(()=>{
    if(seconds>0){
        maxseconds = setInterval(()=>{
            setseconds(seconds-1);
        },1000)
        return ()=>clearInterval(maxseconds)
    }
  })
  return (
    <div className='w-full'>
        <div className='w-11/12 flex items-center justify-evenly mx-auto max-w-[1080px] p-8 
         relative  bg-richblack-700 text-richblack-25 mt-4 border-2 rounded-3xl border-richblack-300'>
            <div className=''>
            <h3>
                {Team}
            </h3>

            </div>
            
            <div>
                <p>
                    {Question}

                </p>
            </div>

            <div>
                <p>
                    Timer:
                    {seconds > 0 ? seconds : "Time's Up"}

                </p>
            </div>


            <div>
                <p>
                    Score:{points}
                </p>
            </div>


        </div>

       


    </div>
  )
}

