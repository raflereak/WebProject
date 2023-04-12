import React from 'react';
import styles from './todolist.module.css';

const Todolist = ({form, children}) => {
  return (
    <main className={styles.todo_list_template}>
      <div className={styles.title}>
        체크리스트
      </div>
      <section className={styles.form_wrapper}>
        {form}
      </section>
      <section className={styles.todpos_wrapper}>
        { children }
      </section>
    </main>
  );
};

export default Todolist;