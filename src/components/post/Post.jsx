import React from 'react'
import hood from '../../assets/a.png'
import './post.css';

const Post = () => {
    return (
  
    <div className="post">
        
       <img src={hood} alt="" class="postimage"/>
    <div className="info">
        <span className="spantitle">Lorem ipsum dolor sit amet.</span>
    
    </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.</p>
       <hr />
       <div className="items">
       <span className="date">1hr ago</span>
       <button className="readmore">Read more</button>
       </div>
    </div>
    
 
  )
}
export default Post;