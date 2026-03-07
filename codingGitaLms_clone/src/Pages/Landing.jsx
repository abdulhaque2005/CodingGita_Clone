import React from 'react'
import FeatureCard from '../components/FeatureCard'

const Landing = () => {
    return (
        <div  className='flex justify-center items-center h-screen bg-black'>
            <div>
                <h1 className='text-white text-6xl font-black text-center'>Coding</h1>
                <h1 className='text-gray-300 text-5xl font-black text-center mt-[20px]'>Gita</h1>
                <p className='text-white text-center mt-[25px]'>Smart, simple, and reliable attendance for modern classrooms.</p>
                <button className='text-center text-black text-3xl bg-white rounded-lg  w-[7rem] h-[3.2rem] mt-[50px] block mx-auto px-4 py-2'>Login</button>
                <div className='flex flex-col md:flex-row gap-6 mt-16'>
                    <FeatureCard title='Role-based dashboards' description="Admin, Mentor, and Student experiences tailored to their needs." />
                    <FeatureCard title='Fast and secure access' description="Encrypted sessions and streamlined navigation." />
                </div>
            </div>
        </div>
    )
}

export default Landing
