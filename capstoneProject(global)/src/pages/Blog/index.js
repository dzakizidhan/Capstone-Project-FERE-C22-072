import React, { useState } from 'react';
import BlogItem from './BlogItem';
import './styles.css';

import blogs from '../../Data/blog.json'
import categories from '../../Data/category.json'
import Category from './Category';

const BlogList = () => {

    return (
    <div className="container py-5 text-start">
        <div className="row">
            <div className="col-md-9">
                <div className="blog">
                    {blogs.map((blog) => (
                        <BlogItem blog={blog} key={blog.id} />
                    ))}
                </div>
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
  );
};

export default BlogList;
