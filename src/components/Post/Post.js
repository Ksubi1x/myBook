import React from 'react'
import './Post.css'

const Post = ( {username, title, text }) => {
  return (
    <div>
        <div className='postContainer'>
            <div className='post'>
              <div className='postHeading'>
                  <h3 className='postTitle'>{ title }</h3>
                  <h5 className='postUsername'>{ username } </h5>
              </div>
              <div className='line'></div>
              <p className='postText'>{ text }</p>
            </div>
            
        </div>
    </div>
  )
}

export default Post