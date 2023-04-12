// src/components/Sidebar.js

import React, { Component } from "react";
import styles from "./arbasidebar.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { MdCalendarToday } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, Route, Routes } from 'react-router-dom'

function ArbaSidebar() {
  return(
    
    <>
      <input id="menuicon" type="checkbox"  />
      <label htmlFor="menuicon">
        <span></span><span></span><span></span>
      </label>
      <div className={styles.side_bar}>
      <Link to="dashboard">
            <button id="extention" className = {styles.extends}>
              대시보드<MdOutlineSpaceDashboard className = {styles.right}/>
            </button>
            </Link>
            <Link to="calendar">
            <button id="extention" className = {styles.extends}>
              일정<BsCalendar3 className = {styles.right} />
            </button>
            </Link>
            <Link to="accountbook">
            <button id="extention" className = {styles.extends}>
              가계부<FaClipboardList className = {styles.right} />
            </button>
            </Link>
            <Link to="map">
            <button id="extention" className = {styles.extends}>
              지도<BiMap className = {styles.right} />
            </button>
            </Link>
            <Link to="notice">
            <button id="extention" className = {styles.extends}>
              공지 및 인수인계<FaChalkboardTeacher className = {styles.right} />
            </button>
            </Link>
            <Link to="today24">
            <button id="extention" className = {styles.extends}>
              Today24<MdCalendarToday className = {styles.right} />
            </button>
            </Link>
            <Link to="checklist">
            <button id="extention" className = {styles.extends}>
              확인<AiOutlineCheck className = {styles.right} />
            </button>
            </Link>
            <Link to="profile">
            <button id="extention" className = {styles.extends}>
              프로필<CgProfile className = {styles.right} />
            </button>
            </Link>
      </div>
      <div className={styles.top_nav}>
        <div>알바 도우미</div>
      </div>
    </>
  )
  
}

export default ArbaSidebar;