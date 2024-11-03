import React, { useState, useEffect } from 'react';

export const ProgressVisual: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [workers, setWorkers] = useState(3);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    if (isWorking && progress < 100) {
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + workers * 0.5, 100));
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isWorking, progress, workers]);

  return (
    <div className="p-4">
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => {
            setProgress(0);
            setIsWorking(true);
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Начать работу
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWorkers(prev => Math.max(1, prev - 1))}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span>Работников: {workers}</span>
          <button
            onClick={() => setWorkers(prev => prev + 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};