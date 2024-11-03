import React from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';
import { TaskType, Subtask } from '../types';

interface TaskListProps {
  tasks: TaskType[];
  onTaskToggle: (taskId: string) => void;
  onSubtaskSelect: (subtask: Subtask) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskToggle,
  onSubtaskSelect,
}) => {
  const getDifficultyColor = (difficulty: Subtask['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'hard':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => onTaskToggle(task.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span className="text-lg font-medium text-gray-800">
                {task.title}
              </span>
            </div>
            {task.isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {task.isExpanded && (
            <div className="divide-y divide-gray-100">
              {task.subtasks.map((subtask) => (
                <button
                  key={subtask.id}
                  onClick={() => onSubtaskSelect(subtask)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Star
                      className={`w-4 h-4 ${getDifficultyColor(
                        subtask.difficulty
                      )}`}
                    />
                    <span className="text-gray-700">{subtask.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};