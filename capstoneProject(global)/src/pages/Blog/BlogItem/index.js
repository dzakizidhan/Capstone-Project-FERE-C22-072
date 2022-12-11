import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    cover,
    id,
  },
}) => {

   let descBlog = (description.length > 200? description.substr(0,200)+'...' : description) 
  return (
    <div className='blog-item'>
        <div className="blog-item-cover">
            <img src={cover} alt='cover' />
        </div>
      <div className="blog-item-info">  
        <Link to={"/blog/"+id} className="text-primary">
          <h3>{title}</h3>
        </Link>
        <div className='blog-item-author'>
            <span>BY <span className="text-danger">{authorName}</span> <span className="text-muted">{createdAt}</span></span>
        </div>
        <p className='blog-item-desc'>{descBlog}</p>
      </div>
    </div>
  );
};

export default BlogItem;
