# 🚀 Notes App 

A clean, modern, and intuitive cross-platform Notes Application built for capturing, organizing, and managing thoughts effortlessly. Features full CRUD capability, live Markdown formatting, category-based filtering, pinning, dark/light theme options, and offline persistence.

---

## 🌟 Features

- **Note Management (CRUD)**: Create, view, edit, and delete notes instantly with dynamic title generation and last-updated timestamps.
- **Search & Filter**: Real-time keyword search across note titles and content, with one-click filtering by categories (*Personal, Work, Ideas, Study*) or pinned status.
- **Pin Priority Notes**: Pin crucial notes to keep them anchored at the top of your list.
- **Markdown Support**: Toggle between rich text editing and live rendered Markdown previews (`# Headings`, `**bold**`, lists, code blocks).
- **Dark & Light Mode**: Built-in system theme switcher for comfortable day and night reading.
- **Offline First**: All user data is locally stored and persistent across browser reloads or network disconnections.

---

## 🛠️ Technology Stack

| Domain | Technology / Package | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) | High-performance component-based UI & instant development server |
| **Language** | [TypeScript](https://www.typescriptlang.org/) / [JavaScript (JSX)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Type safety, maintainability, and dynamic state rendering |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [PostCSS](https://postcss.org/) | Utility-first responsive design system with dark mode support |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible modern vector icon set |
| **Markdown** | [react-markdown](https://github.com/remarkjs/react-markdown) | Live Client-side Markdown compilation |
| **Class Merge** | `clsx` + `tailwind-merge` | Conditional styling and clean utility management |

---

## 💾 Storage Solution Used

- **Browser LocalStorage API**: Notes are automatically synchronized and serialized to the browser's `localStorage` on every change.
- **Offline Persistence**: Ensures zero data loss when offline, closed, or reloaded without requiring a external server or database setup.
- **Initial Seed State**: Provides fallback default data on first launch to guide new users.

---

## ⚙️ Setup & Installation Instructions

Follow these steps to run the application locally on your machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher)
- `npm` (Node Package Manager)

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/suchitajain01/NOTES-APP.git](https://github.com/suchitajain01/NOTES-APP.git)
   cd NOTES-APP/notes-app
