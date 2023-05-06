import "./write.css";
import React, { Component }  from 'react';

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://cdn.discordapp.com/attachments/966970140623261716/966970240615473152/CaA1I11.jpg"
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