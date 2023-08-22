// import React from 'react';
// import '../Card.css'; // You can create a CSS file for styling

// const Card = ({ title, description, imageUrl, bulletPoints }) => {
//   return (
//     <div className="card">
      
//       <h2 className="TotalRevenues">{title}</h2>
//       {/* <p className="card-description">{description}</p> */}
//       {/* <ul className="bullet-points">
//         {bulletPoints.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import '../Linechartcard.css';

const Card = ({ children }) => {
  return (
    <div className="Linechartcard">
      <div className="cards">
        {children}
      </div>
    </div>
  );
};

export default Card;
