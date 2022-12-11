import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import './blog-detail.css';

import blogs from '../../Data/blog.json'
import categories from '../../Data/category.json'
import Category from './Category';
import { Link, useParams } from 'react-router-dom';

const BlogDetail = () => {

    let param = useParams()

    let [blog,setBlog] = useState(null)

    useEffect(() => {
        if(blog == null){
            let result = []
            blogs.forEach(function(i,item){
                if(i.id == param.id)
                {
                    setBlog(i)
                }
            })
        }
    })

    return (
    <div className="container py-5 text-start">
        <div className="blog">
            <div className="row">
                <div className="col-md-9">
                    {blog? <div className='blog-detail'>
                            <h1 className='mb-3'>{blog.title}</h1>
                            <div className='blog-detail-author mb-3'>
                                <span>BY <span className="text-danger">{blog.authorName}</span> <span className="text-muted">{blog.createdAt}</span></span>
                            </div>

                            <div className="blog-detail-cover">
                                <img src={blog.cover} alt='cover' />
                            </div>
                        <div className="blog-detail-info">  
                            <p className='blog-detail-desc'>{blog.description}</p>
                        </div>
                    </div> : ''}
                </div>
                <div className="col-md-3">
                    <h3>Category</h3>
                    <div className="list-group list-group-flush">
                        {categories.map((category) => (
                            <Category name={category.name} key={category.id}/> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogDetail;
