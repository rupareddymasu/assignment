// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const LineChartComponent = ({ data }) => {
//   return (
//     <LineChart width={500} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="x" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
//     </LineChart>
//   );
// };

// export default LineChartComponent;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const LineChartComponent = ({ data }) => {
//   return (
//     <div className="line-chart">
//       <h3>Line Chart</h3>
//       <LineChart width={400} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="x" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="y1" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="y2" stroke="#82ca9d" activeDot={{ r: 8 }} />
//       </LineChart>
//     </div>
//   );
// };

// export default LineChartComponent;


// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const LineChartComponent = ({ data }) => {
//   return (
//     <div className="line-chart">
//       <h3>Bitcoin Price Chart</h3>
//       <LineChart width={600} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="time" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
//       </LineChart>
//     </div>
//   );
// };

// export default LineChartComponent;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const LineChartComponent = ({ data }) => {
//   return (
//     <div className="line-chart">
//       <h3>Bitcoin Price Chart</h3>
//       <LineChart width={600} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="time" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="anotherPrice" stroke="#82ca9d" activeDot={{ r: 8 }} />
//       </LineChart>
//     </div>
//   );
// };

// export default LineChartComponent;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import Card from './Linechartcard';
// import '../Linechartcard.css';

// const LineChartComponent = ({ data }) => {
//   return (
//     <Card>
//       <h3>Bitcoin Price Chart</h3>
//       <LineChart width={600} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="time" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="anotherPrice" stroke="#82ca9d" activeDot={{ r: 8 }} />
//       </LineChart>
//     </Card>
//   );
// };

// export default LineChartComponent;


// LineChartComponent.js
// LineChartComponent.js
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import Card from './Linechartcard';
// import '../Linechartcard.css';

// const LineChartComponent = ({ data }) => {
//   return (
//     <Card>
//       <h3>Nationality Probability Chart</h3>
//       <LineChart width={600} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="country" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="probability" stroke="#8884d8" activeDot={{ r: 8 }} alignmentBaseline='vertical'/>
//         <Line type="monotone" dataKey="anotherProbability" stroke="#82ca9d" activeDot={{ r: 8 }} />
//       </LineChart>
//     </Card>
//   );
// };

// export default LineChartComponent;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import Card from './Linechartcard';
import '../Linechartcard.css';

const LineChartComponent = ({ data }) => {
  return (
    <Card>
      <h3>Nationality Probability Chart</h3>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="probability" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="anotherProbability" stroke="blue" activeDot={{ r: 8 }} />
        <Label
          value="Probability"
          position="top right"
          offset={10}
          style={{ textAnchor: 'middle', fontSize: '14px' }}
        />
        <Label
          value="Another Probability"
          position="top"
          offset={10}
          style={{ textAnchor: 'middle', fontSize: '14px' }}
        />
      </LineChart>
    </Card>
  );
};

export default LineChartComponent;
