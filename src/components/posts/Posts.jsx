import React from 'react';
import Post from '../post/Post'
import './posts.css';

export default function Posts() {
  return (
    <div className="posts">
    <h1>All posts</h1>
      <Post />
      <Post />
      <div className="fthis">
      <Post />
      <Post /> 
      <Post />
      <Post /> 

      </div>
     
  </div>
  )
}
