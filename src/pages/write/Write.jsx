import "./write.css";
import React, { Component }  from 'react';

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://th.bing.com/th/id/R.4fa78214eaf63e8d6afb632b862b73df?rik=s35lxJj%2fqH0QzQ&riu=http%3a%2f%2fwww.wallpapersin4k.org%2fwp-content%2fuploads%2f2017%2f04%2fFlowing-Water-Wallpaper-Free-Download-22.jpg&ehk=s4u3Kb3pFPbzQle4f62CuEqIkhhiKSi2Jy6ojVUG7no%3d&risl=&pid=ImgRaw&r=0"
      />
           <input id="fileInput" type="file" className="File"/>
      <form className="writeForm">
        <div className="writeFormGroup">
     
          <input className="input" placeholder="Title" type="text"/>
        </div>
        <div className="writeFormGroup">
          <textarea className=" writeText" placeholder="type stuff"type="text"/>
        </div>
       
      </form>
      <button className="submit" type="submit">
          Publish
        </button>
    </div>
  );
}