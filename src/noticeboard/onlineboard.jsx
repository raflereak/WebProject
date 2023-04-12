import React, { useState } from 'react';
import styles from './onelineboard.module.css';

function OnlineBoard(props) {
    
  const [noticeContent, setNoticeContent] = useState({
    title: '',
    content: '',
  })

  const user =  props.user

  const getValue = e => {
    const { name, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [name]: value
    })
  };

  const [viewContent, setViewContent] = useState([]);

    return(
        <>
      <div className={styles.title}>
        {props.title}
      </div>

      <div className={styles.info}>

      <div className={styles.form_wrapper}>
        <input className={styles.title_input} type='text' placeholder='제목' onChange={getValue} name='title'/>
        <textarea className={styles.text_area} placeholder='내용' onChange={getValue} name='content'></textarea>
      <button className={styles.submit_button} onClick={() => {setViewContent(viewContent.concat({...noticeContent}))}}>입력</button>
      </div> 
      <div className={styles.notice_container}>
      {viewContent.map(element =>
        <div className={styles.notice_items}>
        <h2>{element.title}</h2>
        <div>
          {element.content}
        </div >
        <div className={styles.name}>
        {`작성자:  ${user.name}`}
        </div>

      </div>
      )}
      </div>
      </div>
      </>
    )
  }

export default OnlineBoard;