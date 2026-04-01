import React from 'react'
import Navbar from '../components/Navbar'
import { MdFeedback } from "react-icons/md";
const Feedback = () => {
  return (
    <div className='min-h-screen bg-black text-white font-sans'>
      <Navbar />
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 flex justify-around'>
        <h1 className='text-5xl'>Feedback</h1>
        <button className='bg-blue-700 rounded-[0.4rem] w-[12vw] h-[5vh]'>+ Create Feedback</button>
      </main>
      <div className='mx-auto flex justify-center items-center max-w-7xl h-[45vh] my-3.5 '>
        <div className='flex justify-between gap-4 flex-col my-10 '>
        <div className='flex items-center justify-center'>
            <MdFeedback className="text-gray-700 text-5xl text-center" />
        </div>
          <h2 className='text-center text-gray-400 text-[1.3rem]'>No feedback yet</h2>
          <p className='text-gray-500'>Share your thoughts and help us improve!</p>
          <button className='bg-blue-700 rounded-[0.4rem] w-[18vw] h-[5vh] '>Submit Your First Feedback</button>
        </div>
      </div>

    </div>
  )
}

export default Feedback