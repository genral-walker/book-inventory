
import React, { ReactElement } from 'react';
import styles from './Nav.module.scss';

interface Props {

}

const Nav: React.FC = (props: Props): ReactElement => {
    return (
        <div className={styles.nav}>
            <h2>book inventory</h2>

            {/* onChange={(e) => filterByGender(e.target.value)} ref={selectRef} */}

            <select id="pet-select">
                <option value="all">All Categories</option>
                <option value="publisher">Publisher</option>
                <option value="name">Name</option>
                <option value="isbn">ISBN</option>
                <option value="authors">Authors</option>
                {/* No END DATE ATTRIBUTE IN API FUNC SO I USED released INSTEAD */}
                <option value="released">Released Date</option>
                <option value="ch-name">Character's Name</option>
                <option value="ch-culture">Character Culture</option>
            </select>

            <form className={styles.search}>
                <input type="text" placeholder='Search for a book' />
                <button type="submit">&#128269;</button>
            </form>
        </div>
    )
}

export default Nav
