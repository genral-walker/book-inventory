
import React from 'react';
import styles from './Btn.module.scss';



const Btn = ({ children, type, active }) => {

    const checkBtnType = type => {
        switch (type) {
            case 'nav':
                return `${styles.btn} ${styles.btnNav}`

            default:
                return active ? `${styles.btn} ${styles.active}` : `${styles.btn}`
        }
    };


    return <button className={checkBtnType(type)}>{children}</button>
};


export default Btn;