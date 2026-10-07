export type Category = 'Personal' | 'Work' | 'Ideas' | 'Study';

export interface Note {
  id: string;
  title: string;
  content: string;
  category: Category;
  tags: string[];
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export type FilterOption = 'All' | 'Pinned' | Category;