import React from "react";
import Wrapper from "../Wrapper";
import MoreArticle from "./MoreArticle";
import calenderIcon from '../../assets/calender-icon.png';
import { useParams } from "react-router-dom";
import { blogArticle } from "../../model/blogData";
import parse from 'html-react-parser';

const BlogDetail = () => {
  const {id} = useParams();
  const selectedArticle = blogArticle.find((article)=> article.id === id);
  const image = require(`../../assets/blog/${selectedArticle.image}`);

  return (
    <Wrapper withBackground={false}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h4 className=" text-lg sm:text-3xl font-semibold my-2 sm:my-4">
            {selectedArticle.title}
          </h4>
          <div className='flex items-center mb-5'><img className='inline-block mr-2' width={14} height={14} src={calenderIcon} alt=''/><span className='text-sm text-neutral-600'>{selectedArticle.publishedDate}</span></div>
          <img src={image} className="w-full sm:h-96 object-contain sm:object-cover"  alt=""/>
             {
              parse(selectedArticle.content)
             }
      
          {/* more aticle */}
          <MoreArticle/>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetail;
