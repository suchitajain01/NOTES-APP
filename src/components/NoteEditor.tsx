import React, { useState } from 'react';
import { Note, Category } from '../types/note';
import ReactMarkdown from 'react-markdown';
import { Eye, Edit2 } from 'lucide-react';

interface NoteEditorProps {
  note: Note | null;
  onUpdateNote: (updatedNote: Note) => void;
}

const CATEGORIES: Category[] = ['Personal', 'Work', 'Ideas', 'Study'];

export const NoteEditor: React.FC<NoteEditorProps> = ({ note, onUpdateNote }) => {
  const [isPreview, setIsPreview] = useState(false);

  if (!note) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400 text-sm bg-gray-50 dark:bg-gray-950">
        Select a note from the left sidebar or create a new one to start writing.
      </div>
    );
  }

  const handleChange = (field: keyof Note, value: any) => {
    onUpdateNote({
      ...note,
      [field]: value,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-6">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
        <select
          value={note.category}
          onChange={(e) => handleChange('category', e.target.value as Category)}
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1.5 rounded-lg border-none focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setIsPreview(!isPreview)}
          className="flex items-center space-x-1.5 text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isPreview ? (
            <>
              <Edit2 className="w-3.5 h-3.5" />
              <span>Edit Mode</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Mode</span>
            </>
          )}
        </button>
      </div>

      {/* Title Input */}
      <input
        type="text"
        value={note.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Note Title..."
        className="text-2xl font-bold bg-transparent text-gray-900 dark:text-white border-none outline-none mb-4 placeholder-gray-400"
      />

      {/* Editor Body or Markdown Preview */}
      <div className="flex-1 overflow-y-auto">
        {isPreview ? (
          <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
            <ReactMarkdown>
              {note.content.trim() || '*No content to preview*'}
            </ReactMarkdown>
          </div>
        ) : (
          <textarea
            value={note.content}
            onChange={(e) => handleChange('content', e.target.value)}
            placeholder="Write your note here using Markdown (e.g. # Heading, **bold**)..."
            className="w-full h-full bg-transparent text-gray-800 dark:text-gray-200 resize-none outline-none font-mono text-sm leading-relaxed placeholder-gray-400"
          />
        )}
      </div>
    </div>
  );
};