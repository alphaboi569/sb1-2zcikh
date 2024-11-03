import React from 'react';
import { X } from 'lucide-react';
import { Subtask } from '../types';
import { MotionVisual } from './visualizations/MotionVisual';
import { GeometryVisual } from './visualizations/GeometryVisual';
import { ProbabilityVisual } from './visualizations/ProbabilityVisual';

interface TaskViewerProps {
  subtask: Subtask | null;
  onClose: () => void;
}

const visualComponents = {
  motion: MotionVisual,
  geometry: GeometryVisual,
  probability: ProbabilityVisual,
};

export const TaskViewer: React.FC<TaskViewerProps> = ({ subtask, onClose }) => {
  if (!subtask) return null;

  const VisualComponent = subtask.visualType ? visualComponents[subtask.visualType] : null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-800">{subtask.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{subtask.description}</p>
          {subtask.hasInteractive && VisualComponent && (
            <div className="bg-gray-50 rounded-lg p-4">
              <VisualComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};