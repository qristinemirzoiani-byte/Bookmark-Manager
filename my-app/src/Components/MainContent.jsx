import React from 'react';
import styles from './MainContent.module.css';
import BookmarkCard from './BookmarkCard';
import switchVertical from '../assets/switchVertical.png';

import frontedlogo from '../assets/FrontedLogo.png';
import MDNlogo from '../assets/MDNLogo.png';
import reactLogo from '../assets/ReactLogo.png'; 
import cloudLogo from '../assets/CloudLogo.png';
import webLogo from '../assets/WebLogo.png';
import tailwindLogo from '../assets/TailwindLogo.png';
import devLogo from '../assets/DevLogo.png';
import javascriptLogo from '../assets/JavaScriptLogo.png';
import freecodeLogo from '../assets/FreeCodeLogo.png';

function MainContent() {
    const bookmark1 = {
    id: 1,
    logo: frontedlogo,
    title: "Frontend Mentor",
    url: "frontendmentor.io",
    description: "Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.",
    tags: ["Practice", "Learning", "Community"],
    views: 47,
    updatedAt: "23 Sep",
    createdAt: "15 Jan",
    isPinned: true,
    isArchived: false
    };
    const bookmark2 = {
    id: 2,
    logo: MDNlogo,
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    description: "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    tags: ["Reference", "HTML", "CSS", "JavaScript"],
    views: 152,
    updatedAt: "24 Sep",
    createdAt: "10 Jan",
    isPinned: true,
    isArchived: false
    };
    const bookmark3 = {
    id: 3,
    logo: reactLogo,
    title: "React Docs",
    url: "react.dev",
    description: "The library for web and native user interfaces. Build user interfaces out of individual pieces called components.",
    tags: ["JavaScript", "Framework", "Reference"],
    views: 0,
    updatedAt: "Never",
    createdAt: "20 Feb",
    isPinned: false,
    isArchived: false
  };
  const bookmark4 = {
    id: 4,
    logo: cloudLogo,
    title: "Cloude",
    url: "claude.ai",
    description: "An AI assistant created by Anthropic that can help with analysis, writing, coding, math, and creative tasks through natural conversation.",
    tags: ["Tools", "AI", "Learning"],
    views: 75,
    updatedAt: "23 sep",
    createdAt: "18  feb",
    isPinned: false,
    isArchived: false
  };
    return (
        <main className={styles.mainContent}>
            <div className={styles.bookmarkHeader}>
                <h2 className={styles.title}>All Bookmarks</h2>

                <button className={styles.sortButton}>
                    <img src={switchVertical} alt="Sort" className={styles.sortIcon} />
                <span> Sort by</span>
                </button>
            </div>
            <div className={styles.bookmarkGrid}>
                <BookmarkCard bookmark={bookmark1} />
                <BookmarkCard bookmark={bookmark2} />
                <BookmarkCard bookmark={bookmark3} />
                <BookmarkCard bookmark={bookmark4} />
            </div>
        </main>
    )
}
export default MainContent;
