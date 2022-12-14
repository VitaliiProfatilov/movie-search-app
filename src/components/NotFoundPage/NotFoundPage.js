import styles from './NotFoundPage.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <>
            <div className={styles.title}>
                You shouldn't be here <span> ☣ </span>
            </div>
            <div className={styles.container}>
                <Link to='/movie-search-app' className={styles.gohome}>
                    Go home
                </Link>
            </div>
        </>
    );
}