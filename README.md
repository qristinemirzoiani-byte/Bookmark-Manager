# 📌 Bookmark Manager — React Application

A feature-rich, interactive, and responsive web application built with **React** to organize, search, filter, and manage web bookmarks with ease. Designed to match the pixel-perfect Figma specifications.

---

## 🚀 Live Demo & Repository
- **Live Demo:** [Add your live URL here]
- **GitHub Repository:** [Add your GitHub repository URL here]

---

## ✨ Features

### 1. 🗂️ Full CRUD Functionality
- **Add Bookmarks:** Create new bookmarks via a validated modal form.
- **Edit Bookmarks:** Update existing bookmarks with auto-populated form fields.
- **Delete Bookmarks:** Remove unwanted bookmarks instantly with reactive state updates.

### 2. 🛡️ Controlled Forms & Validation
- **Title Validation:** Mandatory title check (`Title is required`).
- **URL Validation:** Enforces valid web address format (`Please enter a valid URL`).
- **Tag Validation:** Requires at least one tag per bookmark (`At least one tag is required`).
- **Custom Error UI:** Inline error messages with `noValidate`.

### 3. 📌 Pin & Archive Management
- **Pin / Unpin:** Pin favorite bookmarks to keep them sorted at the very top.
- **Archive / Restore:** Archive bookmarks and access them in a dedicated **Archived** section with one-click restore.

### 4. 🔍 Search, Filter & Sort
- **Real-Time Search:** Instant filtering across bookmark titles and descriptions.
- **Tag-Based Filtering:** Filter by categories using the Sidebar list with an active **All** reset option.
- **Dynamic Sorting:** Toggle between newest additions (**Recent**) and alphabetical (**A-Z**) order.

### 5. 🎨 Light & Dark Themes
- Seamless Light & Dark mode toggle from the profile dropdown menu.
- Theme persistence using `localStorage`.

### 6. 💾 LocalStorage Persistence & Seed Data
- Seed data loaded asynchronously from `public/data/bookmarks.json` via the `fetch()` API.
- All modifications persist across browser refreshes via `localStorage`.

### 7. 📱 Fully Responsive Design
- **Desktop (> 1024px):** 3-column card grid with persistent sidebar navigation.
- **Tablet (768px – 1024px):** 2-column card grid with responsive layout.
- **Mobile (< 768px):** 1-column layout with slide-out mobile drawer navigation.

---

## 🛠️ Tech Stack

- **React 18** (Functional Components, Hooks)
- **Vite** (Build Tool & Development Server)
- **CSS Modules & Global Styles**
- **HTML5 & Modern JavaScript (ES6+)**
- **Web Storage API (localStorage)**

---

## 📂 Project & Component Structure

```text
my-app/
├── public/
│   ├── assets/                  # Public fallback assets & logos
│   └── data/
│       └── bookmarks.json       # Initial seed data
├── src/
│   ├── assets/                  # UI icons, avatars, and assets
│   ├── Components/
│   │   ├── BookmarkCard.jsx     # Individual card with actions & tags
│   │   ├── BookmarkCard.module.css
│   │   ├── BookmarkForm.jsx     # Unified Add/Edit form with validation
│   │   ├── BookmarkForm.module.css
│   │   ├── BookmarkList.jsx     # Responsive grid container (.map())
│   │   ├── BookmarkList.module.css
│   │   ├── EmptyData.jsx        # Empty state component for search/archive/empty lists
│   │   ├── EmptyData.module.css
│   │   ├── Header.jsx           # Search input, Add button, Profile & Theme
│   │   ├── Header.module.css
│   │   ├── MainContent.jsx      # Core logic, filtering, sorting, state
│   │   ├── MainContent.module.css
│   │   ├── Modal.jsx            # Reusable modal container (props.children)
│   │   ├── Modal.module.css
│   │   ├── Sidebar.jsx          # Navigation & Tag category filter
│   │   └── Sidebar.module.css
│   ├── App.css                  # Global styles, variables, theme overrides
│   ├── App.jsx                  # Main app layout, theme & sidebar state
│   ├── index.css                # Base CSS resets
│   └── main.jsx                 # Application entry point
├── package.json
└── README.md