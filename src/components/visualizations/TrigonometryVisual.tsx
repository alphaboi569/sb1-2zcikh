import React, { useState } from 'react';

export const TrigonometryVisual: React.FC = () => {
  const [angle, setAngle] = useState(0);
  
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  
  const radians = (angle * Math.PI) / 180;
  const x = centerX + radius * Math.cos(radians);
  const y = centerY - radius * Math.sin(radians);
  
  const sinLength = radius * Math.sin(radians);
  const cosLength = radius * Math.cos(radians);

  return (
    <div className="p-4">
      <svg width="200" height="200" className="mx-auto">
        {/* Unit Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#ddd"
          strokeWidth="1"
        />
        
        {/* Axes */}
        <line x1="20" y1={centerY} x2="180" y2={centerY} stroke="black" strokeWidth="1" />
        <line x1={centerX} y1="20" x2={centerX} y2="180" stroke="black" strokeWidth="1" />
        
        {/* Angle Arc */}
        <path
          d={`M ${centerX + 20} ${centerY} A 20 20 0 ${angle > 180 ? 1 : 0} 1 ${
            centerX + 20 * Math.cos(radians)
          } ${centerY - 20 * Math.sin(radians)}`}
          fill="none"
          stroke="blue"
          strokeWidth="2"
        />
        
        {/* Point on Circle */}
        <circle cx={x} cy={y} r="4" fill="red" />
        
        {/* Lines for sin and cos */}
        <line
          x1={x}
          y1={y}
          x2={x}
          y2={centerY}
          stroke="green"
          strokeWidth="2"
          strokeDasharray="4"
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={x}
          y2={centerY}
          stroke="blue"
          strokeWidth="2"
          strokeDasharray="4"
        />
      </svg>
      
      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-center text-sm space-y-1">
          <div>Угол: {angle}°</div>
          <div className="text-blue-600">cos({angle}°) = {Math.cos(radians).toFixed(3)}</div>
          <div className="text-green-600">sin({angle}°) = {Math.sin(radians).toFixed(3)}</div>
        </div>
      </div>
    </div>
  );
};