import React, { useState } from 'react';
import styles from './MainContent.module.css';
import BookmarkList from './BookmarkList';
import BookmarkCard from './BookmarkCard';
import Modal from './Modal';
import BookmarkForm from './BookmarkForm';
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
import codepenLogo from '../assets/CodepenLogo.png';    
import canuseLogo from '../assets/CanuseLogo.png';
import cssgridgardenLogo from '../assets/CSSgridgardenLogo.png';
import csstrickLogo from '../assets/CSStrickLogo.png';
import stackoverflowLogo from '../assets/stackoverflowLogo.png';
import smeshLogo from '../assets/smeshLogo.png';
import githabLogo from '../assets/GithubLogo.png';
import zombeLogo from '../assets/Logo.png';
import flexfrogLogo from '../assets/flexboxLogo.png'

function MainContent({ currentView, isModalOpen, onCloseModal, searchTerm,selectedTag }) {
    const [bookmarks, setBookmarks] = useState([ 
    {
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
    },
{
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
    },
{
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
},
{
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
},
    
{
    id: 5,
    logo: webLogo,
    title: "Web.dev",
    url: "web.dev",
    description: "Guidance to build modern web experiences that work on any browser. Learn about web vitals, PWAs, and more.",  
    tags: ["Performance", "Learning", "Tips"],
    views: 15,
    updatedAt: "16 Aug",
    createdAt: "15 Feb",
    isPinned: false,
    isArchived: false
},

{
    id: 6,
    logo: tailwindLogo,
    title: "Tailwind CSS",
    url: "tailwindcss.com",
    description: "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    tags: ["CSS", "Framework", "Tools"],
    views: 52,
    updatedAt: "19 Sep",
    createdAt: "12 Feb",
    isPinned: false,
    isArchived: false
},

{
    id: 7,
    logo: devLogo,
    title: "Dev.to",
    url: "dev.to",
    description: "A constructive and inclusive social network for software developers. Share knowledge and grow your career.",
    tags: [ "Community", "Learning", "Tips"],
    views: 19,
    updatedAt: "21 Sep",
    createdAt: "10 Feb",
    isPinned: false,
    isArchived: false
},

{
    id: 8,
    logo: javascriptLogo,
    title: "JavaScript.info",
    url: "javascript.info",
    description: "The Modern JavaScript Tutorial. How it’s done now. From the basics to advanced topics with simple, but detailed explanations.",
    tags: ["Javascript", "Tutorial", "Learning"],
    views: 41,
    updatedAt: "15 Sep",
    createdAt: "08 Feb",
    isPinned: false,
    isArchived: false
},

{
    id: 9,
    logo: freecodeLogo,
    title: "FreeCodeCamp",
    url: "freecodecamp.org",
    description: "Learn to code for free. Build projects. Earn certifications. An open source community that helps you learn to code with free online courses and certifications.",
    tags: ["Learning", "Practice", "Community"],
    views: 28,
    updatedAt: "30 Aug",
    createdAt: "05 Feb",
    isPinned: false,
    isArchived: false
},
{
    id: 10,
    logo: codepenLogo,
    title: "CodePen",
    url: "codepen.io",
    description: "An online code editor and social development environment for front-end designers and developers.",
    tags: ["Tools", "Practice", "Community"],
    views: 34,
    updatedAt: "18 Sep",
    createdAt: "25 Jan",
    isPinned: false,
    isArchived: false
},

{
    id: 11,
    logo: canuseLogo,
    title: "Can I use",
    url: "caniuse.com",
    description: "Support tables for HTML5, CSS3, etc. Check browser compatibility for web technologies.",
    tags: ["Tools", "Reference", "Compatibility"],
    views: 67,
    updatedAt: "20 Sep",
    createdAt: "20 Jan",
    isPinned: false,
    isArchived: false
},

{
    id: 12,
    logo: cssgridgardenLogo,
    title: "CSS Grid Garden",
    url: "cssgridgarden.com",
    description: "A game for learning CSS grid layout. Grow your carrot garden by writing CSS grid code.",
    tags: ["CSS", "Practice", "Layout"],
    views: 8,
    updatedAt: "15 Jul",
    createdAt: "01 Feb",
    isPinned: false,
    isArchived: false
},

{
    id: 13,
    logo: csstrickLogo,
    title: "CSS-Tricks",
    url: "css-tricks.com",
    description: "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",
    tags: ["CSS", "Tutorial", "Tips"],
    views: 89,
    updatedAt: "22 Sep",
    createdAt: "12 Jan",
    isPinned: false,
    isArchived: false
},

{
    id: 14,
    logo: stackoverflowLogo,
    title: "Stack Overflow",
    url: "stackoverflow.com",
    description: "The largest, most trusted online community for developers to learn, share their knowledge, and build their careers.",
    tags: ["Community", "Reference", "Tips"],
    views: 234,
    updatedAt: "24 Sep",
    createdAt: "08 Jan",
    isPinned: false,
    isArchived: false
},

{
    id: 15,
    logo: smeshLogo,
    title: "Smashing Magazine",
    url: "smashingmagazine.com",
    description: "For web designers and developers. Articles on CSS, JavaScript, front-end, UX, design systems, and more.",
    tags: ["Design", "Tutorial", "Performance"],
    views: 23,
    updatedAt: "10 Sep",
    createdAt: "18 Jan",
    isPinned: false,
    isArchived: false
},  

{
    id: 16,
    logo: githabLogo,
    title: "GitHub",
    url: "github.com",
    description: "Where the world builds software. Millions of developers and companies build, ship, and maintain their software on GitHub.",
    tags: ["Tools", "Community", "Git"],
    views: 198,
    updatedAt: "24 Sep",
    createdAt: "05 Jan",
    isPinned: false,
    isArchived: false
},
{
    id:17,
    logo: zombeLogo,
    title: "Flexbox Zombies",
    url: "mastery.games/flexboxzombies",
    description: "Master flexbox layout in CSS by playing a survival game. Use flexbox to position your crossbow and survive the zombie apocalypse.",
    tags: ["CSS", "Practice", "Layout"],
    views: 6,
    updatedAt: "18 Apr",
    createdAt:"22 Feb",
    isPinned:false,
    isArchived: false

},
{
    id:18,
    logo: flexfrogLogo,
    title: "Flexbox Froggy",
    url: "flexboxfroggy.com",
    description: "A game where you help Froggy and friends by writing CSS flexbox code.",
    tags: ["CSS", "Practice", "Layout"],
    views: 12,
    updatedAt: "12 Jun",
    createdAt:"01 Feb",
    isPinned:false,
    isArchived: false
}
]);
const [editingBookmark, setEditingBookmark] = useState(null);

const handleTogglePin = (id) => {
    setBookmarks(
        bookmarks.map((bookmark) =>
            bookmark.id === id
            ? { ...bookmark, isPinned: !bookmark.isPinned }
            : bookmark
        )
    );
};

const handleToggleArchive = (id) => {
    setBookmarks(
        bookmarks.map((bookmark) =>
            bookmark.id === id
            ? { ...bookmark, isArchived: !bookmark.isArchived }
            : bookmark
        )
    );
};
const handleDeleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
};

const handleAddBookmark = (formData) => {
    const newBookmark = {
        id: Date.now(),
        logo: webLogo,
        title: formData.title,
        url: formData.url,
        description: formData.description,
        tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
        views: 0,
        updatedAt: "Just now",
        createdAt: new Date().toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short'
        }),
        isPinned: false,
        isArchived: false
    };
    setBookmarks([newBookmark, ...bookmarks]);
};


const handleEditBookmark = (formData) => {
    setBookmarks(
        bookmarks.map((bookmark) =>
            bookmark.id === editingBookmark.id
                ? {
                        ...bookmark,
                        title: formData.title,
                        url: formData.url,
                        description: formData.description,
                        tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
                    }
                : bookmark
        )
    );
    setEditingBookmark(null);
};
const visibleBookmarks = bookmarks
    .filter((bookmark) =>
        currentView === 'archived' ? bookmark.isArchived : !bookmark.isArchived
    )
    .filter((bookmark) => {
        if (!selectedTag) return true;
        return bookmark.tags && bookmark.tags.includes(selectedTag);
    })
    .filter((bookmark) => {
        if (!searchTerm.trim()) return true;
        const query = searchTerm.toLowerCase();
        const matchesTitle = bookmark.title.toLowerCase().includes(query);
        const matchesDescription = bookmark.description.toLowerCase().includes(query);
        return matchesTitle || matchesDescription;
    })
    .sort ((a,b) =>{
        if (a.isPinned === b.isPinned)return 0;
        return a.isPinned ? -1 : 1
    });

return (
        <main className={styles.mainContent}>
            <div className={styles.bookmarkHeader}>
                <h2 className={styles.title}> {currentView === 'archived'
                    ? 'Archived' : 'All Bookmarks'}</h2>

                <button className={styles.sortButton}
                
                >
                    <img src={switchVertical} alt="Sort" className={styles.sortIcon} />
                <span> Sort by</span>
                </button>
            </div>


        {visibleBookmarks.length === 0 ? (
        <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>No bookmarks found</p>
            <p className={styles.emptyText}>
            We couldn't find any results matching "{searchTerm}".
            </p>
    </div>
) : (
    <BookmarkList 
        bookmarks={visibleBookmarks} 
        onTogglePin={handleTogglePin} 
        onToggleArchive={handleToggleArchive}
        onDelete={handleDeleteBookmark}
        onEdit={(bookmark) => setEditingBookmark(bookmark)}
    />
)}

            {(isModalOpen || editingBookmark) && (
                <Modal
                    onClose={() => {
                        onCloseModal();
                        setEditingBookmark(null);
                    }}
                >
                    <BookmarkForm
                        editingBookmark={editingBookmark}
                        onClose={() => {
                            onCloseModal();
                            setEditingBookmark(null);
                        }}
                        onSaveBookmark={editingBookmark ? handleEditBookmark : handleAddBookmark}
                    />
                </Modal>
            )}
        
        </main>
    )
}
export default MainContent;
