import React from 'react'

const Card = ({
  icon, title, content
}) => {
  return (
    <div className="relative bg-white rounded-lg px-6 pt-10 pb-6 shadow-lg shadow-slate-100 ">
        <div className='absolute -top-6 left-6'>
            <img src={icon} alt='' className='w-12' />
        </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

export default Card;