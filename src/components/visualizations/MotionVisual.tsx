import React, { useState, useEffect } from 'react';

export const MotionVisual: React.FC = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(100);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (isMoving) {
      const interval = setInterval(() => {
        setPosition1(prev => prev + 1);
        setPosition2(prev => prev - 1);
        
        if (position1 >= position2) {
          setIsMoving(false);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isMoving, position1, position2]);

  return (
    <div className="p-4">
      <div className="relative h-20 bg-gray-100 rounded-lg">
        <div
          className="absolute w-8 h-8 bg-blue-500 rounded-full transition-all"
          style={{ left: `${position1}%`, transform: 'translateX(-50%)' }}
        />
        <div
          className="absolute w-8 h-8 bg-red-500 rounded-full transition-all"
          style={{ left: `${position2}%`, transform: 'translateX(-50%)' }}
        />
      </div>
      <button
        onClick={() => {
          setPosition1(0);
          setPosition2(100);
          setIsMoving(true);
        }}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 w-full"
      >
        Начать движение
      </button>
    </div>
  );
};