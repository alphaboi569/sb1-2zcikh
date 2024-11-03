import React, { useState } from 'react';

export const Geometry3dVisual: React.FC = () => {
  const [rotationX, setRotationX] = useState(30);
  const [rotationY, setRotationY] = useState(45);
  
  // Convert 3D points to 2D with basic perspective
  const project = (x: number, y: number, z: number) => {
    const scale = 800 / (800 - z);
    return {
      x: x * scale + 100,
      y: y * scale + 100
    };
  };
  
  // Calculate pyramid points
  const baseSize = 60;
  const height = 80;
  const base = [
    { x: -baseSize/2, y: -baseSize/2, z: -height/2 },
    { x: baseSize/2, y: -baseSize/2, z: -height/2 },
    { x: baseSize/2, y: baseSize/2, z: -height/2 },
    { x: -baseSize/2, y: baseSize/2, z: -height/2 }
  ];
  
  const apex = { x: 0, y: 0, z: height/2 };
  
  // Rotate points
  const rotate = (point: typeof base[0]) => {
    const cosX = Math.cos(rotationX * Math.PI / 180);
    const sinX = Math.sin(rotationX * Math.PI / 180);
    const cosY = Math.cos(rotationY * Math.PI / 180);
    const sinY = Math.sin(rotationY * Math.PI / 180);
    
    const rotatedY = point.y * cosX - point.z * sinX;
    const rotatedZ = point.y * sinX + point.z * cosX;
    
    return {
      x: point.x * cosY + rotatedZ * sinY,
      y: rotatedY,
      z: -point.x * sinY + rotatedZ * cosY
    };
  };

  const rotatedBase = base.map(rotate);
  const rotatedApex = rotate(apex);
  
  const projectedBase = rotatedBase.map(p => project(p.x, p.y, p.z));
  const projectedApex = project(rotatedApex.x, rotatedApex.y, rotatedApex.z);

  return (
    <div className="p-4">
      <svg width="200" height="200" className="mx-auto">
        {/* Draw base */}
        <path
          d={`M ${projectedBase[0].x} ${projectedBase[0].y} 
              L ${projectedBase[1].x} ${projectedBase[1].y}
              L ${projectedBase[2].x} ${projectedBase[2].y}
              L ${projectedBase[3].x} ${projectedBase[3].y} Z`}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
        
        {/* Draw edges to apex */}
        {projectedBase.map((point, i) => (
          <line
            key={i}
            x1={point.x}
            y1={point.y}
            x2={projectedApex.x}
            y2={projectedApex.y}
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
      
      <div className="mt-4 space-y-2">
        <div>
          <label className="block text-sm">Поворот по X:</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotationX}
            onChange={(e) => setRotationX(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm">Поворот по Y:</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotationY}
            onChange={(e) => setRotationY(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};