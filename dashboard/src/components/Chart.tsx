import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ChartProps {
  data: { date: string; value: number }[];
  title: string;
}

const Chart: React.FC<ChartProps> = ({ data, title }) => {
  const options: Highcharts.Options = {
    title: { text: title },
    xAxis: { categories: data.map(d => d.date) },
    series: [{ data: data.map(d => d.value), type: 'line' }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;