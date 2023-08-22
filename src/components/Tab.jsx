import React ,{useState}from 'react'

const Tab = ({tabdata,option,setoption}) => {
  return (
    <div className='w-11/12 p-8 mt-8 flex flex-col items-center justify-center '>
        {
            tabdata.map((opt,idx)=>(
                <button key={idx}
                onClick={()=>setoption(opt.tabName)}
                className={`${option==opt.tabName ? "bg-green-500 text-white":" text-richblack-900 bg-red-600 "} py-2 px-3 rounded-md
                 transition-all duration-200 flex items-center gap-x-2 flex-row mb-3 justify-center shadow-md border border-black`}
                >
                    <div className=' p-1 mx-auto text-black'>
                    <p>
                    {(String.fromCharCode(97+idx)).toUpperCase()}.
                    </p>

                    </div>
                    
                    
                    <p>
                  {opt.tabName}

                  </p>
                    
                </button>
            ))
        }


    </div>
  )
}

export default Tab