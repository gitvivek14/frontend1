import React,{useState} from 'react'

const Bet = () => {
  const [formdata, setformdata] = useState({bet:0});
  const{bet} = formdata;


  const changehandler = (e)=>{
    setformdata((prevdata)=>({
      [e.target.name]:e.target.value,
    })
    )
  }


  const submitform=(e)=>{
    e.preventDefault();
  }


  const bethandler=()=>{

  }


  return (
    <div className='w-full'>
       <div className='flex flex-col w-11/12 mx-auto max-w-max p-8 items-center'>
            <div className=''>
                <p>Question 1 of 9</p>
            </div>


            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a quibusdam dolorum aliquam. Consequuntur voluptas corrupti 
                    voluptate optio porro dolores eaque facere magnam voluptatem 
                    libero enim quidem, quaerat recusandae voluptatum?
                </p>
            </div>
            
            <div className='flex flex-row p-8 gap-x-10 flex-wrap'>
                <div>
                    <button>
                        Answer A
                    </button>
                </div>
                <div>
                    <button>
                        Answer B
                    </button>
                </div>
                <div>
                    <button>
                        Answer C
                    </button>
                </div>
                <div>
                    <button>
                        Answer D
                    </button>
                </div>
            </div>


            {/* BetButton */}
            <div className='flex flex-col'>
              <form>
                <label>
                  <p>
                    Your bet:
                  </p>
                </label>
                <input type='text' onChange={changehandler} value={bet} name='bet' placeholder={bet}>

                </input>
                <p>You Have Betted the Amount: {bet}</p>
              <button type='button' onClick={bethandler}>
                bet
              </button>

              



              <button type='submit' onClick={submitform}>
                Submit
              </button>


              </form>
            </div>
        </div>
    </div>
  )
}

export default Bet