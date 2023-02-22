import React from 'react';


const PostItem = (props) => {

  
    return (
        <div className='post'>
            <div className='PostImg-frame'>
            <img className='PostImg' src = {props.post.backImg} />
            
          <div className='post-hover'></div>
            <div className="post__content">
          <p>{props.post.title}</p>
          <p className='post-txt'>
          {props.post.body}
          </p>
          </div>
        

              </div>
       
         
        </div>
    );
};

export default PostItem;