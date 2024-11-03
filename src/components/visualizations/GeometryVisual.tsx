import React, { useState } from 'react';

export const GeometryVisual: React.FC = () => {
  const [angle, setAngle] = useState(60);
  
  const trianglePoints = {
    A: { x: 50, y: 150 },
    B: { x: 150, y: 150 },
    C: {
      x: 150 - 100 * Math.cos((angle * Math.PI) / 180),
      y: 150 - 100 * Math.sin((angle * Math.PI) / 180),
    },
  };

  return (
    <div className="p-4">
      <svg width="200" height="200" className="mx-auto">
        <line
          x1={trianglePoints.A.x}
          y1={trianglePoints.A.y}
          x2={trianglePoints.B.x}
          y2={trianglePoints.B.y}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={trianglePoints.B.x}
          y1={trianglePoints.B.y}
          x2={trianglePoints.C.x}
          y2={trianglePoints.C.y}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={trianglePoints.C.x}
          y1={trianglePoints.C.y}
          x2={trianglePoints.A.x}
          y2={trianglePoints.A.y}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <input
        type="range"
        min="30"
        max="150"
        value={angle}
        onChange={(e) => setAngle(Number(e.target.value))}
        className="w-full mt-4"
      />
      <div className="text-center text-sm text-gray-600">
        Угол: {angle}°
      </div>
    </div>
  );
};