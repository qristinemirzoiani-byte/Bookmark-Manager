import React from 'react';
import styles from './Header.module.css';
import searchIcon from '../assets/SearchIcon.png';
import plusIcon from '../assets/IconPlus.png';
import avatarImg from '../assets/Avatar.png';

function Header ({onOpenModal, searchTerm, onSearchChange}) {
    return (
        <header className={styles.header}>
            <div className={styles.searchWrapper}>
                <img src={searchIcon} alt="Search" className={styles.searchIcon} />
                <input 
                type="text"
                placeholder="Search by title..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <div className={styles.actions}>
                <button className={styles.addButton} onClick={onOpenModal}>
                    <img src={plusIcon} alt="Add" className={styles.addIcon} />
                    <span>Add Bookmark</span>
                </button>
                <div className={styles.avatarWrapper}>
                    <img src={avatarImg} alt="User Avatar" className={styles.avatarImage} />
                </div>
            </div>
        </header>
    );
}
export default Header;

