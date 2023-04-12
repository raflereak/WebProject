import React, { useState } from 'react';
import styles from './noticeboard.module.css';
import OnlineBoard from './onlineboard';

function Noticeboard(props) {
  const [noticeContent, setNoticeContent] = useState({
    title: '',
    content: ''
  })

  const getValue = e => {
    const { name, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [name]: value
    })
  };
  
  
  const getValue2 = e => {
    const { name, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [name]: value
    })
  };

  const [viewContent, setViewContent] = useState([]);

    return(
      <div className={styles.whiteboard}>

        <div className={styles.top}>

      
        <OnlineBoard title="공지사항" user={props.user}/>
      </div>


      <div className={styles.bottom}>

        <OnlineBoard title="인수인계" user={props.user}/>
      </div>
      </div>
    )
  }

export default Noticeboard;