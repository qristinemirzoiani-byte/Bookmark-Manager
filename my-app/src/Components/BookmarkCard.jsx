import React, { useState } from 'react';
import styles from './BookmarkCard.module.css';

import dotsIcon from '../assets/dots-vertical.png';
import eyeIcon from '../assets/eyeIqon.png';
import clockIcon from '../assets/clockIqon.png';
import calendarIcon from '../assets/calendarIqon.png';
import pinIcon from '../assets/pinIqon.png';

function BookmarkCard({ bookmark, onTogglePin, onToggleArchive, onDelete,onEdit }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.siteInfo}>
                    <img 
                        src={bookmark.logo} 
                        alt={bookmark.title} 
                        className={styles.logo}
                        onError={(e) => {
        // if not found foto teke some WebLogo:
        e.target.src = "/assets/WebLogo.png"; 
    }} 
/>
                    <div>
                        <h3 className={styles.siteTitle}>{bookmark.title}</h3>
                        <span className={styles.siteUrl}>{bookmark.url}</span>
                    </div>
                </div>

                <div className={styles.menuWrapper}>
                    <button 
                        className={styles.moreButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img src={dotsIcon} alt="More options" className={styles.dotsIcon} />
                    </button>

                    {menuOpen && (
                        <div className={styles.dropdownMenu}>
                            <button
                                className={styles.dropdownItem}
                                onClick={() => {
                                    onEdit(bookmark);
                                    
                                    setMenuOpen(false);
                                }}
                            >
                            Edit
                            </button>
                            <button
                                className={styles.dropdownItem}
                                onClick={() => {
                                    onToggleArchive(bookmark.id);
                                    setMenuOpen(false);
                                }}>
                                {bookmark.isArchived ? 'Restore' : 'Archive'}
                            </button>


                            
                            <button
                                className={styles.dropdownItem}
                                onClick={() => {
                                    onDelete(bookmark.id);
                                    setMenuOpen(false);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div> 

            <p className={styles.description}>
                {bookmark.description}
            </p>

            <div className={styles.tags}>
                {bookmark.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <img src={eyeIcon} alt="views" className={styles.statIcon} />
                        <span>{bookmark.views}</span>
                    </div>

                    <div className={styles.statItem}>
                        <img src={clockIcon} alt="last updated" className={styles.statIcon} />
                        <span>{bookmark.updatedAt}</span>
                    </div>

                    <div className={styles.statItem}>
                        <img src={calendarIcon} alt="created date" className={styles.statIcon} />
                        <span>{bookmark.createdAt}</span>
                    </div>
                </div>

                <button 
                    className={`${styles.pinButton} ${bookmark.isPinned ? styles.pinned : ''}`}
                    onClick={() => onTogglePin(bookmark.id)}
                >
                    <img src={pinIcon} alt="pin" className={styles.pinIcon} />
                </button>
            </div>
        </div>
    );
}

export default BookmarkCard;