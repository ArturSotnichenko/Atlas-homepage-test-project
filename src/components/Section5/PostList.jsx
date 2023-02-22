import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title}) => {
    return (
        <>
        <div className='post-title'>
             <p className='w-color-D '>
            {title}</p>
            
            </div>
         <div className='post-itam-frame'>
         <div className='post-item'>
    {posts.map((post, index) =>
   <PostItem number ={index +1} post={post} key={post.id}/>
        )} 
        </div>  
        </div>
        </>
    );
};

export default PostList;