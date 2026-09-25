import React from 'react';
import styles from './BookmarkCard.module.css';

import dotsIcon from '../assets/dots-vertical.png';
import eyeIcon from '../assets/eyeIqon.png';
import clockIcon from '../assets/clockIqon.png';
import calendarIcon from '../assets/calendarIqon.png';
import pinIcon from '../assets/pinIqon.png';
import frontedlogo from '../assets/FrontedLogo.png';
import MDNlogo from '../assets/MDNLogo.png';
import reactLogo from '../assets/ReactLogo.png'; 
import cloudLogo from '../assets/CloudLogo.png';
import webLogo from '../assets/WebLogo.png';
import tailwindLogo from '../assets/TailwindLogo.png';
import devLogo from '../assets/DevLogo.png';
import javascriptLogo from '../assets/JavaScriptLogo.png';
import freecodeLogo from '../assets/FreeCodeLogo.png';

function BookmarkCard({ bookmark }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className= {styles.siteInfo}>
                    <img src={bookmark.logo} alt="site Logo" className={styles.logo} />
                
                <div>
                    <h3 className= {styles.siteTitle}>{bookmark.title}</h3>
                    <span className={styles.siteUrl}>{bookmark.url}</span>
                </div>
            </div>
            <button className= {styles.moreButton}>
                <img src={dotsIcon} alt="More options" className={styles.dotsIcon} />
        </button>
        </div>

        <p className={styles.description}>
            {bookmark.description}
        </p>
        <div className= {styles.tags}>
                {bookmark.tags.map((tag, index) => (
        <span key={index} className={styles.tag}>{tag}</span>
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

                
                <button className={styles.pinButton}>
                    <img src={pinIcon} alt="pin" className={styles.pinIcon} />
                </button>
            </div>
        </div>
    );
}

export default BookmarkCard;
