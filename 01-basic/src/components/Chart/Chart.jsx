import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  const dataPointValues = dataPoints.map(({ value }) => value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
