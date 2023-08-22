import React from 'react'
import {Circles} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='w-11/12 max-w-[1080px] flex items-center mx-auto justify-center h-screen'>
        <Circles
  height="80"
  width="80"
  color="#002D62"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
        />
    </div>
  )
}
export default Loading