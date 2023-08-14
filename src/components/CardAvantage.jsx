import React from 'react'

const CardAdvantage = ({
    icon, title, content
}) => {
  return (
    <div className="flex rounded-lg px-6 pt-10 pb-6 w-full">
        <div className="w-36 mr-5" >
            <img src={icon} alt='' className='w-10' />
        </div>
        <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
        </div>
    </div>
  )
}

export default CardAdvantage;