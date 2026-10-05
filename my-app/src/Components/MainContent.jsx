import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';
import BookmarkList from './BookmarkList';
import BookmarkCard from './BookmarkCard';
import Modal from './Modal';
import BookmarkForm from './BookmarkForm';
import switchVertical from '../assets/switchVertical.png';

function MainContent({ currentView, isModalOpen, onCloseModal, searchTerm, selectedTag }) {
    // 1. სამი state (Loading / Success / Error):
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    const [editingBookmark, setEditingBookmark] = useState(null);
    const [sortBy, setSortBy] = useState('recent');

    
useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');

    if (savedBookmarks) {
        // if localStorage has data, parse it and set bookmarks
        try {
            setBookmarks(JSON.parse(savedBookmarks));
            setIsLoading(false);
        } catch (e) {
            console.error("Error reading localStorage:", e);
            fetchFromJSON();
        }
    } else {
        // if localStorage is empty, fetch from JSON
        fetchFromJSON();
    }

    function fetchFromJSON() {
        fetch('/data/bookmarks.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch bookmarks');
                }
                return res.json();
            })
            .then((data) => {
                setBookmarks(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }
}, []);

// 2. Refresh and save to localStorage
useEffect(() => {
    if (!isLoading) {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
}, [bookmarks, isLoading]);

    // pin bookmark function
    const handleTogglePin = (id) => {
        setBookmarks(
            bookmarks.map((bookmark) =>
                bookmark.id === id
                ? { ...bookmark, isPinned: !bookmark.isPinned }
                : bookmark
            )
        );
    };
    
    // archive bookmark function
    const handleToggleArchive = (id) => {
        setBookmarks(
            bookmarks.map((bookmark) =>
                bookmark.id === id
                ? { ...bookmark, isArchived: !bookmark.isArchived }
                : bookmark
            )
        );
    };
    
    // delete bookmark function
    const handleDeleteBookmark = (id) => {
        setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    };
    
    // adding bookmark function
    const handleAddBookmark = (formData) => {
        const newBookmark = {
            id: Date.now(),
            logo: "/assets/WebLogo.png",
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
    
    // editing bookmark function
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

    // sorting function
    const handleToggleSort = () => {
        setSortBy((prev) => (prev === 'recent' ? 'title' : 'recent'));
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

        // sort bookmarks based on the selected sort option
        .sort((a, b) => {
            if (a.isPinned !== b.isPinned) {
                return a.isPinned ? -1 : 1;
            }
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            }
            return b.id - a.id;
        });

        const renderEmptyState = () => {
        // if search term is present and no bookmarks match the search
        if (searchTerm.trim()) {
            return (
                <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>No bookmarks found</p>
                    <p className={styles.emptyText}>
                        We couldn't find any results matching "{searchTerm}".
                    </p>
                </div>
            );
        }

        // if a specific tag is selected and there are no bookmarks with that tag
        if (selectedTag) {
            return (
                <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>No bookmarks found</p>
                    <p className={styles.emptyText}>
                        No bookmarks tagged with "{selectedTag}".
                    </p>
                </div>
            );
        }

        // if archived view is selected and there are no archived bookmarks
        if (currentView === 'archived') {
            return (
                <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>No archived bookmarks</p>
                    <p className={styles.emptyText}>
                        Bookmarks you archive will appear here.
                    </p>
                </div>
            );
        }

        // if no bookmarks at all:

        return (
            <div className={styles.emptyState}>
                <p className={styles.emptyTitle}>No bookmarks yet</p>
                <p className={styles.emptyText}>
                    Click "Add Bookmark" to create your first bookmark!
                </p>
            </div>
        );
    };

    return (
        <main className={styles.mainContent}>
            <div className={styles.bookmarkHeader}>
                <h2 className={styles.title}>
                    {currentView === 'archived' ? 'Archived' : 'All Bookmarks'}
                </h2>

                <button className={styles.sortButton} onClick={handleToggleSort} title={`Current: ${sortBy}`}>
                    <img src={switchVertical} alt="Sort" className={styles.sortIcon} />
                    <span>Sort by</span>
                </button>
            </div>

            {isLoading ? (
                <p className={styles.loadingText}>Loading bookmarks...</p>
            ) : error ? (
                <p className={styles.errorText}>Something went wrong while loading bookmarks.</p>
            ) : visibleBookmarks.length === 0 ? (
                renderEmptyState()
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
    );
}

export default MainContent;