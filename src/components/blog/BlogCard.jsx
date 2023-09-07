import React from 'react'
import calenderIcon from '../../assets/calender-icon.png';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({id, title, content, publishedDate, image}) => {

  const  imageUrl = require(`../../assets/blog/${image}`);

  const navigate = useNavigate();

  return (
    <div className='cursor-pointer' onClick={()=> navigate(`/blog/${id}`) } >
      <img className='w-full saturate-100 hover:saturate-200' src={imageUrl} alt=''/>
      <h4 className='text-md sm:text-xl font-semibold my-2'>{title}</h4>
      <p>{content}</p>
      <div className='flex items-center'><img className='inline-block mr-2' width={14} height={14} src={calenderIcon} alt=''/><span className='text-sm sm:text-base text-neutral-600'>{publishedDate}</span></div>
    </div>
  )
}

export default BlogCard;