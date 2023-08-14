import React from 'react';
import chatIcon from '../assets/chat-icon.png';
import userIcon from '../assets/user-icon.png';
import taskIcon from '../assets/task-icon.png';
import CardAdvantage from './CardAvantage';

const advantages = [{
    icon: chatIcon,
    title: 'Talkative',
    content: 'I excel in conveying even the most complex matters with utmost clarity, where I effectively articulate my ideas'
}, {
    icon: userIcon,
    title: 'Cooperative',
    content: 'collaborative efforts with UI designer or fellow developers, Moreover, I highly value and appreciate constructive feedback'
},
{
    icon: taskIcon,
    title: 'Supervision',
    content: 'I oversee the entire process, starting from client acquisition and project timeline management, all the way through to product delivery'
}

]

const Advantages = () => {
  return (
    <div className='my-16'>
        <h4 className='text-2xl sm:text-center font-semibold'>Why Hire Me</h4>
    <div className='grid sm:grid-cols-3 sm:gap-8'>
        {advantages.map(({icon, title, content})=> <CardAdvantage icon={icon} title={title} content={content}/>)}
    </div>
    </div>
  )
}

export default Advantages;