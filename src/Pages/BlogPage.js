import React from 'react';
import Title from '../components/Title';
import allBlogs from '../data/allBlogs';

function BlogPage() {
    return (
        <div >
            <div className="b-title">
                <Title title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogPage;
