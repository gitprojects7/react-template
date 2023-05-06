import "./account.css";
import React from 'react';

export default function Account() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
       
          <span className="settingDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile </label>
          <div className="settingsProfile">
            <img
              src="https://cdn.discordapp.com/attachments/994891864345948170/994891940166385694/67.jpg"
              alt=""
            />
            <input id="fileInput" className="Profilepic"type="file" />
          </div>
       
          <label >Username</label>
          <input type="text" placeholder="aaaa" className="user" name="name" />
          <label>Password</label>
          <input type="password" className="pass" placeholder="Password" name="password" />
       
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}