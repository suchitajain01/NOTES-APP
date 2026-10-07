import React from 'react';
import { Note } from '../types/note';
import { Pin, Trash2 } from 'lucide-react';

interface NoteListProps {
  notes: Note[];
  selectedNoteId: string | null;
  onSelectNote: (id: string) => void;
  onTogglePin: (id: string) => void;
  onDeleteNote: (id: string) => void;
}

export const NoteList: React.FC<NoteListProps> = ({
  notes,
  selectedNoteId,
  onSelectNote,
  onTogglePin,
  onDeleteNote,
}) => {
  if (notes.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        No notes found. Create one or clear your search!
      </div>
    );
  }

  return (
    <div className="space-y-3 p-4 overflow-y-auto max-h-[calc(100vh-160px)]">
      {notes.map((note) => (
        <div
          key={note.id}
          onClick={() => onSelectNote(note.id)}
          className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 ${
            selectedNoteId === note.id
              ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-800 dark:border-indigo-400'
              : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700'
          }`}
        >
          <div className="flex justify-between items-start mb-1.5">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate max-w-[170px]">
              {note.title.trim() || 'Untitled Note'}
            </h3>
            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin(note.id);
                }}
                className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                  note.isPinned ? 'text-amber-500' : 'text-gray-400'
                }`}
                title={note.isPinned ? 'Unpin note' : 'Pin note'}
              >
                <Pin className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteNote(note.id);
                }}
                className="p-1 rounded text-gray-400 hover:text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Delete note"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {note.content.trim() || 'No additional text...'}
          </p>

          <div className="flex items-center justify-between text-[11px]">
            <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-medium">
              {note.category}
            </span>
            <span className="text-gray-400">
              {new Date(note.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};