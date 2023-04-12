import React from 'react';
import styles from './accountcardblue.module.css';

function AccountCardBlue(props) {
  return(
      <div className={styles.funOneline}>
        <div className={styles.fundate}>{props.date}</div>
        <div className={styles.separation}/>
        <div className={styles.funinfo}>{props.info}</div>
        <div className={styles.separation}/>
        <div className={styles.funwon}>-{props.won}(원)</div>
      </div>
  );
}

export default AccountCardBlue;