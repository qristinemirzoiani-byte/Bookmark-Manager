import React from 'react';
import BookmarkCard from './BookmarkCard';
import EmptyData from './EmptyData';
import styles from './BookmarkList.module.css';


function BookmarkList({ bookmarks, onTogglePin, onToggleArchive }) {
    if (bookmarks.length === 0) {
        return <EmptyData />;
    }

        
    return (
        <div className={styles.bookmarkGrid}>
            {bookmarks.map((bookmark) => (
                <BookmarkCard key={bookmark.id}
                bookmark={bookmark} 
                onTogglePin={onTogglePin}
                onToggleArchive={onToggleArchive}/>
            ))}
        </div>
    );
}
export default BookmarkList;