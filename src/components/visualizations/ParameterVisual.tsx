import React, { useState } from 'react';

export const ParameterVisual: React.FC = () => {
  const [parameter, setParameter] = useState(1);
  
  const width = 200;
  const height = 200;
  const scale = 20;
  const offsetX = width / 2;
  const offsetY = height / 2;
  
  // Generate points for the function with parameter
  const generatePoints = (a: number) => {
    const points: [number, number][] = [];
    for (let x = -width/2; x <= width/2; x++) {
      const xVal = x / scale;
      const yVal = xVal * xVal + a * xVal;
      points.push([x + offsetX, -yVal * scale + offsetY]);
    }
    return points;
  };
  
  const points = generatePoints(parameter);
  const pathD = points.map((point, i) => 
    (i === 0 ? 'M' : 'L') + point.join(',')
  ).join(' ');

  return (
    <div className="p-4">
      <svg width={width} height={height} className="mx-auto">
        {/* Axes */}
        <line x1="0" y1={offsetY} x2={width} y2={offsetY} stroke="black" strokeWidth="1" />
        <line x1={offsetX} y1="0" x2={offsetX} y2={height} stroke="black" strokeWidth="1" />
        
        {/* Graph */}
        <path
          d={pathD}
          fill="none"
          stroke="blue"
          strokeWidth="2"
        />
      </svg>
      
      <div className="mt-4">
        <label className="block text-sm">Параметр a:</label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={parameter}
          onChange={(e) => setParameter(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-center text-sm mt-2">
          y = x² + {parameter}x
        </div>
      </div>
    </div>
  );
};