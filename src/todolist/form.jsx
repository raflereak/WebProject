import React from 'react';
import styles from './form.module.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className={styles.form}>
      <input className={styles.form_input} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className={styles.create_button} onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;