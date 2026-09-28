import React from 'react';
import styles from './EmptyData.module.css';

function EmptyData() {
    return (
    <div className={styles.emptyContainer}>
        <h3 className={styles.emptyTitle}>You don't have any bookmarks yet.</h3>
        <p className={styles.emptyText}>
        Click the "+ Add Bookmark" button above to save your first website!
        </p>
    </div>
    );
}

export default EmptyData;