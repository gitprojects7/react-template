import React from 'react'
import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
export default function () {
  return (
  <>
    <Header />
    <div className="home">
        <Posts />
        <Sidebar />
    </div>
</>
  )
}
