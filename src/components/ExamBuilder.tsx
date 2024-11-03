import React, { useState } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import { TaskType } from '../types';

interface ExamBuilderProps {
  tasks: TaskType[];
  selectedTasks: string[];
  onTaskSelect: (taskId: string) => void;
  onCreateExam: () => void;
}

export const ExamBuilder: React.FC<ExamBuilderProps> = ({
  tasks,
  selectedTasks,
  onTaskSelect,
  onCreateExam,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const selectedTaskDetails = tasks
    .map(task => ({
      title: task.title,
      selected: selectedTasks.includes(task.id),
      subtasks: task.subtasks.length
    }));

  const totalTasks = selectedTaskDetails.reduce(
    (sum, task) => sum + (task.selected ? task.subtasks : 0),
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Составить вариант экзамена
      </h2>
      
      <div className="space-y-3 mb-6">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedTasks.includes(task.id)}
              onChange={() => onTaskSelect(task.id)}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-gray-700">{task.title}</span>
            <span className="text-sm text-gray-500">
              ({task.subtasks.length} задач)
            </span>
          </label>
        ))}
      </div>

      {showPreview && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">Предварительный просмотр</h3>
          <ul className="space-y-2">
            {selectedTaskDetails.map((task, index) => (
              task.selected && (
                <li key={index} className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {task.title} ({task.subtasks} задач)
                </li>
              )
            ))}
          </ul>
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <AlertCircle className="w-4 h-4 mr-2" />
            Всего задач: {totalTasks}
          </div>
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="w-full py-2 px-4 rounded-md text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-colors"
        >
          {showPreview ? 'Скрыть предпросмотр' : 'Показать предпросмотр'}
        </button>

        <button
          onClick={onCreateExam}
          disabled={selectedTasks.length === 0}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${
              selectedTasks.length > 0
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-400 cursor-not-allowed'
            }
            transition-colors`}
        >
          Создать вариант
        </button>
      </div>
    </div>
  );
};