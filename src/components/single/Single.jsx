import React from 'react';
import a from "../../assets/a.png";

import './single.css';
export default function Single() {
  return (
    <div className="single">
        <div className="wrapper">
            <img src={a} alt="" class="singleimg"/>
       
        <h5 className="singlestitle">Lorem ipsum dolor sit amet.  </h5>
        <div className="edit">
          <i className="icon far fa-edit"></i>
          <i className="icon far fa-trash-alt"></i>
        </div>
       
        <div className="postinfo">
          <span className="author">Author: <b>a</b></span>
          <span className="postdate">  1hr ago</span>
          </div>
   
          <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa veniam minima porro ipsam officiis. Harum, ipsa. Nobis maiores et beatae provident quia, quae quaerat! Consectetur culpa hic natus ratione.
          Nobis nihil reiciendis possimus sint? Quod quas doloribus illo repellat eveniet! Id quia illo veniam rerum nobis, quos harum officia, vitae odit delectus mollitia perspiciatis quibusdam quam cum animi velit?
          Quas est, recusandae obcaecati nisi hic sed illo? Eligendi quos consectetur culpa iusto. Magnam illo placeat quo impedit sit nisi exercitationem accusantium amet earum, facilis unde velit perspiciatis id cupiditate!
          Autem mollitia magni blanditiis quo consectetur velit minus omnis libero ea enim, reprehenderit beatae ullam. Sequi consequuntur mollitia accusantium voluptate cum deleniti, quae quis, esse, vero magni delectus ut. Eligendi.
          Laboriosam quibusdam perspiciatis, explicabo quia molestias nam esse modi! Aspernatur quo debitis ducimus aliquam eaque beatae consectetur provident quia animi similique. A omnis assumenda quam quo sunt aperiam aliquam expedita!
          Autem mollitia magni blanditiis quo consectetur velit minus omnis libero ea enim, reprehenderit beatae ullam. Sequi consequuntur mollitia accusantium voluptate cum deleniti, quae quis, esse, vero magni delectus ut. Eligendi.
          Laboriosam quibusdam perspiciatis, explicabo quia molestias nam esse modi! Aspernatur quo debitis ducimus aliquam eaque beatae consectetur provident quia animi similique. A omnis assumenda quam quo sunt aperiam aliquam expedita!</p>
    
    </div>
    </div>
  )
}
