import React, { useState, useEffect } from 'react';

export const ProbabilityVisual: React.FC = () => {
  const [balls, setBalls] = useState<{ id: number; color: string }[]>([]);
  const [selectedBall, setSelectedBall] = useState<number | null>(null);

  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const newBalls = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setBalls(newBalls);
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {balls.map((ball) => (
          <button
            key={ball.id}
            onClick={() => setSelectedBall(ball.id)}
            className={`w-12 h-12 rounded-full transition-transform ${
              selectedBall === ball.id ? 'scale-110 ring-2 ring-indigo-500' : ''
            }`}
            style={{ backgroundColor: ball.color }}
          />
        ))}
      </div>
      <div className="text-center text-sm text-gray-600">
        Вероятность выбора: {selectedBall !== null ? '1/10' : '0'}
      </div>
    </div>
  );
};