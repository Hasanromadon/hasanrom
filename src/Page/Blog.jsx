import React from 'react';
import Wrapper from '../components/Wrapper';
import BigHeadlineCard from '../components/blog/BigHeadlineCard';
import BlogCard from '../components/blog/BlogCard';
import { blogArticle } from '../model/blogData';

const Blog = () => {
  return (
    <Wrapper>
        <div className='container'>
            <h1 className='text-4xl text-center font-semibold mb-12' >Blogs</h1>
            <BigHeadlineCard/>
            <div className='grid sm:grid-cols-3 gap-10 mt-10'>
               {blogArticle.map(({id, title, publishedDate, image}) => <BlogCard key={id} id={id} title={title} publishedDate={publishedDate} image={image} />)}
            </div>
        </div>
    </Wrapper>
  )
}

export default Blog