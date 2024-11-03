import React, { useState, useEffect } from 'react';

export const ChartVisual: React.FC = () => {
  const [years, setYears] = useState(3);
  const [initialAmount, setInitialAmount] = useState(100000);
  const [rate, setRate] = useState(10);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const newData = [initialAmount];
    for (let i = 1; i <= years; i++) {
      const amount = newData[i - 1] * (1 + rate / 100);
      newData.push(amount);
    }
    setData(newData);
  }, [years, initialAmount, rate]);

  const maxAmount = Math.max(...data);

  return (
    <div className="p-4">
      <div className="h-40 flex items-end gap-2">
        {data.map((amount, index) => (
          <div
            key={index}
            className="flex-1 bg-indigo-600 rounded-t transition-all duration-300"
            style={{ height: `${(amount / maxAmount) * 100}%` }}
          >
            <div className="text-xs text-center mt-2 transform -rotate-90">
              {Math.round(amount).toLocaleString()} ₽
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <label>Годы:</label>
          <input
            type="range"
            min="1"
            max="5"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="flex-1"
          />
          <span>{years}</span>
        </div>
        <div className="flex items-center gap-2">
          <label>Ставка:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="flex-1"
          />
          <span>{rate}%</span>
        </div>
      </div>
    </div>
  );
};