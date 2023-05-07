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
              src="https://cozyhomeslife.com/wp-content/uploads/2017/10/montana-log-cabin-1.jpg"
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