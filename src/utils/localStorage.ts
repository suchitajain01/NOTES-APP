import { Note } from '../types/note';

const STORAGE_KEY = 'recruitment_notes_app_v1';

export const loadNotes = (): Note[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : getInitialNotes();
  } catch {
    return getInitialNotes();
  }
};

export const saveNotes = (notes: Note[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

const getInitialNotes = (): Note[] => [
  {
    id: '1',
    title: '🚀 Welcome to Notes App!',
    content: 'This app supports **Markdown**, categories, pinning, and dark mode.',
    category: 'Ideas',
    tags: ['welcome'],
    isPinned: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];