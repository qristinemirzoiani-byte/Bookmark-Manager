import React, {useState} from 'react';

import styles from './Sidebar.module.css';
import logoImg from '../assets/Bookmark.png';
import homeIcon from '../assets/IconHome.png'; 
import archiveIcon from '../assets/archive.png'; 


function Sidebar({ currentView, onSelectView, selectedTag, onSelectTag }) {

    const tagsData = [
    { name: 'AI', count: 1 },
    { name: 'Community', count: 5 },
    { name: 'Compatibility', count: 1 },
    { name: 'CSS', count: 6 },
    { name: 'Design', count: 1 },
    { name: 'Framework', count: 2 },
    { name: 'Git', count: 1 },
    { name: 'HTML', count: 2 },
    { name: 'JavaScript', count: 3 },
    { name: 'Layout', count: 3 },
    { name: 'Learning', count: 6 },
    { name: 'Performance', count: 2 },
    { name: 'Practice', count: 5 },
    { name: 'Reference', count: 4 },
    { name: 'Tips', count: 4 },
    { name: 'Tools', count: 4 },
    { name: 'Tutorial', count: 3 }
    ];

    return (
    <aside className={styles.sidebar}>
        <div className={styles.logo}>
            <img src={logoImg} alt="Bookmark Manager" className={styles.logoImage} />
                <span className={styles.logoText}>Bookmark Manager</span>
        </div>
        <div className={styles.navSection}>
        <button
            className={`${styles.navButton} ${currentView === 'home' ? 
            styles.active : ''}`}
            onClick={() => onSelectView('home')}
        >
            <img src={homeIcon} alt="Home" className={styles.navIcon} />
            <span>Home</span>
        </button>

        <button
            className={`${styles.navButton} ${currentView === 'archived' ? styles.active : ''}`}
            onClick={() => onSelectView('archived')}
        >
            <img src={archiveIcon} alt="Archived" className={styles.navIcon} />
                <span>Archived</span>
        </button>
        </div>

        <div className={styles.tagsSection}>
        <span className={styles.tagsHeader}>TAGS</span>

        <div className={styles.tagsList}>
            {tagsData.map((tag) => (
            <div
                key={tag.name}
                className={`${styles.tagRow} ${selectedTag === tag.name ? styles.selected : ''}`}
                onClick={() => onSelectTag(selectedTag === tag.name ? null : tag.name)}
            >
                <div className={styles.tagLeft}>
                <div className={styles.checkboxSquare} />
                <span>{tag.name}</span>
                </div>
                <span className={styles.tagCount}>{tag.count}</span>
            </div>
            ))}
        </div>
        </div>
    </aside>
    );
}

export default Sidebar;