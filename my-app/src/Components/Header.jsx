import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import searchIcon from '../assets/SearchIcon.png';
import plusIcon from '../assets/IconPlus.png';
import avatarImg from '../assets/Avatar.png';
import themeIcon from '../assets/themeIcon.png';
import logoutIcon from '../assets/logoutIcon.png';

function Header ({onOpenModal, searchTerm, onSearchChange, theme, onSelectTheme}) {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
                
                <div className={styles.profileContainer}>
                    <div 
                        className={styles.avatarWrapper}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img src={avatarImg} alt="User Avatar" className={styles.avatarImage} />
                    </div>

                    {/* dropdown menu */}
                    {isDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            {/* 1. avatar info */}
                            <div className={styles.userInfo}>
                                <img src={avatarImg} alt="User Avatar" className={styles.menuAvatar} />
                                <div className={styles.userText}>
                                    <h4 className={styles.userName}>Emily Carter</h4>
                                    <p className={styles.userEmail}>emily101@gmail.com</p>
                                </div>
                            </div>

                            <hr className={styles.divider} />

                            {/* 2. Theme */}
                            <div className={styles.themeRow}>
                                <div className={styles.themeLabel}>
                                    <img src={themeIcon} alt="Theme" className={styles.rowIcon} />
                                    <span>Theme</span>
                                </div>
                                <div className={styles.themeSwitch}>
                                    <button 
                                        className={`${styles.themeOption} ${theme === 'light' ? styles.activeTheme : ''}`}
                                        onClick={() => onSelectTheme('light')}
                                        title="Light Mode"
                                    >
                                        ☀️
                                    </button>
                                    <button 
                                        className={`${styles.themeOption} ${theme === 'dark' ? styles.activeTheme : ''}`}
                                        onClick={() => onSelectTheme('dark')}
                                        title="Dark Mode"
                                    >
                                        🌙
                                    </button>
                                </div>
                            </div>

                            {/* 3. Logout*/}
                            <button 
                                className={styles.logoutButton}
                                onClick={() => {
                                    alert("Logout clicked!");
                                    setIsDropdownOpen(false);
                                }}
                            >
                                <img src={logoutIcon} alt="Logout" className={styles.rowIcon} />
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Header;

