import React, { useState } from 'react';
import styles from './BookmarkCard.module.css';

import dotsIcon from '../assets/dots-vertical.png';
import eyeIcon from '../assets/eyeIqon.png';
import clockIcon from '../assets/clockIqon.png';
import calendarIcon from '../assets/calendarIqon.png';
import pinIcon from '../assets/pinIqon.png';

function BookmarkCard({ bookmark, onTogglePin, onToggleArchive, onDelete, onEdit }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // ლინკის სწორი ფორმატირება (თუ https:// არ აქვს, დაუმატოს):
    const formattedUrl = bookmark.url.startsWith('http://') || bookmark.url.startsWith('https://')
        ? bookmark.url
        : `https://${bookmark.url}`;

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.siteInfo}>
                    <img 
                        src={bookmark.logo} 
                        alt={bookmark.title} 
                        className={styles.logo}
                        onError={(e) => {
                            e.target.src = "/assets/WebLogo.png"; 
                        }} 
                    />
                    <div>
                        <a 
                            href={formattedUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <h3 className={styles.siteTitle}>{bookmark.title}</h3>
                        </a>

                        <a 
                            href={formattedUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.siteUrl}
                            style={{ textDecoration: 'none' }}
                        >
                            {bookmark.url}
                        </a>
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
                                    onTogglePin(bookmark.id);
                                    setMenuOpen(false);
                                }}
                            >
                                {bookmark.isPinned ? 'Unpin' : 'Pin'}
                            </button>

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
                                }}
                            >
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

                {/* Pinned Badge */}
                {bookmark.isPinned && (
                    <div className={styles.pinnedBadge} title="Pinned">
                        <img src={pinIcon} alt="pinned" className={styles.pinIcon} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookmarkCard;