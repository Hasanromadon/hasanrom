import React from "react";
import BlogCard from "./BlogCard";
import { blogArticle } from "../../model/blogData";
import { useParams } from "react-router-dom";

const MoreArticle = () => {
  const {id} = useParams();

  return (
    <>
    <hr className="border-n w-full my-8"/>
      <p className="text-2xl font-semibold my-8">More Article</p>
      <div className="grid sm:grid-cols-2 gap-8">
        {blogArticle.filter((article)=> article.id !== id).slice(0, 2).map(({id, title, publishedDate, image }) => (
          <BlogCard key={id} id={id} title={title} publishedDate={publishedDate} image={image}  />
        ))}
      </div>
    </>
  );
};

export default MoreArticle;
