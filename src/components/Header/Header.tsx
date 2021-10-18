
import React, { ReactElement } from 'react';
import styles from './Header.module.scss';

interface Props {

}

const Header: React.FC = ({ }: Props): ReactElement => {
    return (
        <header className={styles.head}>
            <h1>All your favourite books.</h1>
        </header>
    )
}

export default Header
