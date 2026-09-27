import React from 'react';
import BookmarkCard from './BookmarkCard';
import styles from './BookmarkList.module.css';

function BookmarkList({ bookmarks }) {
    return (
        <div className={styles.bookmarkGrid}>
            {bookmarks.map((bookmark) => (
                <BookmarkCard key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
    );
}
export default BookmarkList;