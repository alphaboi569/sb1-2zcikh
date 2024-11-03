import React, { useState } from 'react';

export const GraphVisual: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  
  const width = 200;
  const height = 200;
  const scale = 20;
  const offsetX = width / 2;
  const offsetY = height / 2;
  
  // Generate points for quadratic function
  const points: [number, number][] = [];
  for (let x = -width/2; x <= width/2; x++) {
    const xVal = x / scale;
    const yVal = a * xVal * xVal + b * xVal + c;
    points.push([x + offsetX, -yVal * scale + offsetY]);
  }
  
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
      
      <div className="mt-4 space-y-2">
        <div>
          <label className="block text-sm">a (x²):</label>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm">b (x):</label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.5"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm">c:</label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.5"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="text-center text-sm">
          y = {a}x² {b >= 0 ? '+' : ''}{b}x {c >= 0 ? '+' : ''}{c}
        </div>
      </div>
    </div>
  );
};