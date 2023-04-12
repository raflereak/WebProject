import React from "react";
import styles from "./card.module.css";

function Card(props) {
    return (
        <>
        <div className={styles.card_round}>
            <div className={styles.Title}>
                {props.title}
            </div>
            <div className={styles.info}>
                {props.info}
            </div>    
        </div>.
        </>
    );
}

export default Card;