
import React from 'react';
import Btn from '../Btn/Btn';
import styles from './Box.module.scss';


const Box = ({ children, type, votes, topic, details, count, btnName }) => {

    const classesToReturn = type => {
        switch (type) {
            case 'inverse':
                return `${styles.box} ${styles.inverse}`

            case 'overview':
                return `${styles.box} ${styles.overview}`

            case 'roadmap':
                return `${styles.box} ${styles.roadmap}`

            case 'main':
                return `${styles.box} ${styles.main}`

            default:
                return `${styles.box}`
        }
    };


    if (type !== 'main') {
        return <div className={classesToReturn(type)}>{children}</div>
    } else {
        return (
            <div className={classesToReturn(type)}>
                <div>
                    <span>^</span>
                    <span>{votes}</span>
                </div>

                <div>
                    <h2>{topic}</h2>
                    <p>{details}</p>
                    <Btn type='overview'>{btnName}</Btn>
                </div>

                <span></span>
                <h2>{count}</h2>
            </div>
        )
    }


};

export default Box;
