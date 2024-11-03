import React from 'react';
import { X, ArrowLeft, Download, Star } from 'lucide-react';
import { ExamVariant, Subtask } from '../types';

interface ExamPreviewProps {
  variant: ExamVariant;
  onClose: () => void;
  onSubtaskSelect: (subtask: Subtask) => void;
}

export const ExamPreview: React.FC<ExamPreviewProps> = ({
  variant,
  onClose,
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

  const handleDownload = () => {
    const content = `Вариант ЕГЭ по математике
Дата: ${new Date(variant.date).toLocaleDateString()}

${variant.tasks.map((task, index) => `
${index + 1}. ${task.title}
${task.description}
Сложность: ${task.difficulty}
`).join('\n')}`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `variant-${variant.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              Вариант ЕГЭ
            </h2>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <Download className="w-4 h-4" />
            <span>Скачать</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {variant.tasks.map((task, index) => (
            <div
              key={task.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => onSubtaskSelect(task)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-medium text-gray-900">
                    {index + 1}.
                  </span>
                  <h3 className="text-lg font-medium text-gray-900">
                    {task.title}
                  </h3>
                </div>
                <Star className={`w-5 h-5 ${getDifficultyColor(task.difficulty)}`} />
              </div>
              <p className="text-gray-600">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};