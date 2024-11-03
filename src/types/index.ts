export interface TaskType {
  id: string;
  title: string;
  subtasks: Subtask[];
  isExpanded: boolean;
}

export interface Subtask {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hasInteractive: boolean;
  visualType?: 'motion' | 'geometry' | 'probability';
  solution: string;
  answer: string;
}

export interface ExamVariant {
  id: string;
  date: string;
  tasks: Subtask[];
  userAnswers: Record<string, string>;
  checkedAnswers: Record<string, boolean>;
  showSolutions: Record<string, boolean>;
}

export interface ExamConfig {
  selectedTasks: string[];
  taskCount: number;
}