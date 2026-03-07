import React from 'react'

const FeatureCard = ({ title, description }) => {
    return (
        <div className='bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 w-[370px]'>
            <h3 className='text-white text-lg font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 text-sm'>{description}</p>
        </div>
    )
}

export default FeatureCard
