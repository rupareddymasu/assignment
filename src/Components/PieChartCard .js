import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import '../App.css';

const PieChartCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Pie Chart</h5>
        <div className="pie-chart-container">
          <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default PieChartCard;
