// // import React from 'react';
// // import PieChartCard from './Components/PieChartCard ';

// // const jsonData = [
// //   { label: 'Label 1', value: 30, color: '#8884d8' },
// //   { label: 'Label 2', value: 20, color: '#83a6ed' },
// //   { label: 'Label 3', value: 50, color: '#8dd1e1' },
// // ];

// // const App = () => {     
// //   return (
// //     <div className="card"> {/* Add a container to center the content */}
// //       <h1>Pie Chart Example</h1>
// //       <PieChartCard data={jsonData} />
// //     </div>
// //   );
// // };

// // export default App;

// import React from 'react';
// import LineChartComponent from './Components/LineChart';

// const jsonData = [
//   { x: 'Jan', y: 150 },
//   { x: 'Feb', y: 200 },
//   { x: 'Mar', y: 350 },
//   { x: 'Apr', y: 220 },
//   { x: 'May', y: 300 },
// ];

// const App = () => {
//   return (
//     <div className="container">
//       <h1>Line Chart Example</h1>
//       <LineChartComponent data={jsonData} />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import LineChartComponent from './Components/LineChart';

// const jsonData = [
//   { x: 'Jan', y1: 150, y2: 100 },
//   { x: 'Feb', y1: 200, y2: 180 },
//   { x: 'Mar', y1: 350, y2: 250 },
//   { x: 'Apr', y1: 220, y2: 120 },
//   { x: 'May', y1: 300, y2: 280 },
// ];

// const App = () => {
//   return (
//     <div className="container">
//       <h1>Line Chart Example</h1>
//       <LineChartComponent data={jsonData} />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import LineChartComponent from './Components/LineChart';

// const App = () => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => {
//         const priceData = response.data.bpi;
//         const formattedData = Object.keys(priceData).map(time => ({
//           time,
//           price: priceData[time].rate_float,
//         }));
//         setJsonData(formattedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Bitcoin Price Chart</h1>
//       <LineChartComponent data={jsonData} />
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import LineChartComponent from './Components/LineChart';

// const App = () => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => {
//         const priceData = response.data.bpi;
//         const formattedData = Object.keys(priceData).map(time => ({
//           time,
//           price: priceData[time].rate_float,
//           anotherPrice: priceData[time].rate_float * 1.5, // Example: anotherPrice is 1.5 times the price
//         }));
//         setJsonData(formattedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Bitcoin Price Chart</h1>
//       {jsonData.length > 0 ? <LineChartComponent data={jsonData} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import LineChartComponent from './Components/LineChart';
// import Card from './Components/Linechartcard';
// import './Linechartcard.css';

// const Dashboard = () => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => {
//         const priceData = response.data.bpi;
//         const formattedData = Object.keys(priceData).map(time => ({
//           time,
//           price: priceData[time].rate_float,
//           anotherPrice: priceData[time].rate_float * 1.5,
//         }));
//         setJsonData(formattedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
      
//       <Card>
//         {jsonData.length > 0 ? <LineChartComponent data={jsonData} /> : <p>Loading...</p>}
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;;


// Dashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import LineChartComponent from './Components/LineChart';
// import Card from './Components/Linechartcard';
// import './Linechartcard.css';

// const Dashboard = () => {
//   const [nationalityData, setNationalityData] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.nationalize.io?name=nathaniel')
//       .then(response => {
//         const nationality = response.data.country.map(country => ({
//           country: country.country_id,
//           probability: country.probability,
//         }));
//         setNationalityData(nationality);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <Card>
//         {nationalityData.length > 0 ? (
//           <LineChartComponent data={nationalityData} />
//         ) : (
//           <p>Loading...</p>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineChartComponent from './Components/LineChart';
import Card from './Components/Linechartcard';
import './Linechartcard.css';

const Dashboard = () => {
  const [nationalityData, setNationalityData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nationalize.io?name=nathaniel')
      .then(response => {
        const nationality = response.data.country.map(country => ({
          country: country.country_id,
          probability: country.probability,
          anotherProbability: country.probability * 1.5, // Adjust this as needed
        }));
        setNationalityData(nationality);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <Card>
       
          <LineChartComponent data={nationalityData} />
       
      </Card>
    </div>
  );
};

export default Dashboard;


