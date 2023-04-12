import React from 'react';
import styles from './main.module.css'

const Main = () => {
    return(
    <>
    <div className = {styles.div__main}>
        <img src="" alt="" />
        <h3>알바생</h3>
        <ul className = {styles.menu}>
            <li className = {styles.menu__item}>알바</li>
            <li className = {styles.menu__item}>기타</li>
        </ul>
    </div>     
    <div className = {styles.content}></div>
    </>
)};

export default Main;