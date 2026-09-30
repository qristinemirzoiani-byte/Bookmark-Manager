import React, { useState } from 'react';
import styles from './AddBookmarkModal.module.css';

function AddBookmarkModal({ onClose, onAddBookmark }) {
    const [form, setForm] = useState({
    title: '',
    url: '',
    description: '',
    tags: '',
});

// eror state
const [errors, setErrors]= useState({});


  // 2. onChange function
    const handleChange = (e) => {
    const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value,
        });
    };

  // 3. onSubmit function
    const handleSubmit = (e) => {
    e.preventDefault(); 

    const newErrors={};

    if (!form.title.trim()){
        newErrors.title= 'Title is required';
    }
    if (!form.url.trim() || !form.url.includes('.')){
        newErrors.url='Please enter a valid URL';
    }
    if (!form.description.trim()){
        newErrors.description='Description is required';
    }
    if (!form.tags.trim()){
        newErrors.tags='at least one tag is required';
    }
    if(Object.keys(newErrors).length>0){
        setErrors(newErrors);
        return;
    }
    
    onAddBookmark(form); 
    onClose();
    };

    return (
        <div className={styles.overlay}>
        <div className={styles.modal}>
            <div className={styles.modalHeader}>
            <div>
                <h2 className={styles.modalTitle}>Add a bookmark</h2>
                <p className={styles.modalSubtitle}>
                Save a link with details to keep your collection organized.
                </p>
            </div>
            <button className={styles.closeBtn} onClick={onClose}>
                ✕
            </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label>Title *</label>
                <input
                type="text"
                name="title"
                placeholder="e.g. Frontend Mentor"
                value={form.title}
                onChange={handleChange}
                className={errors.title ? styles.inputError : ''}
                />
                {errors.title && <span className={styles.errorText}>
                    {errors.title}</span>}
            </div>

            <div className={styles.field}>
                <label>Website URL *</label>
                <input
                type="text"
                name="url"
                placeholder="e.g. frontendmentor.io"
                value={form.url}
                onChange={handleChange}
                className={errors.url ? styles.inputError : ''}
                />
                {errors.url && <span className={styles.errorText}>{errors.url}</span>}
                
            </div>

            <div className={styles.field}>
                <label>Description *</label>
                <textarea
                name="description"
                placeholder="Write a short description..."
                value={form.description}
                onChange={handleChange}
                rows={3}
                className={errors.description ? styles.inputError : ''}
                />
                {errors.description && (
                <span className={styles.errorText}>{errors.description}</span>
                )}
            </div>

            <div className={styles.field}>
                <label>Tags (comma separated) *</label>
                <input
                type="text"
                name="tags"
                placeholder="e.g. Practice, Learning, Community"
                value={form.tags}
                onChange={handleChange}
                className={errors.tags ? styles.inputError : ''}
                />
                {errors.tags && <span className={styles.errorText}>{errors.tags}</span>}
            </div>

            <div className={styles.actions}>
                <button type="button" className={styles.cancelBtn} onClick={onClose}>
                Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                Add Bookmark
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default AddBookmarkModal;