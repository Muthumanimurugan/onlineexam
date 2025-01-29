

// import React from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import './Dashboard.css';
// import logo from "../assets/logo.png"; 





// const muthu = {
//   title: "SSC CGL (Tier I & Tier II) Mock Test 2024",
//   subject: "Maths",
//   logo: "https://example.com/logo3.png",
// }






// const Dashboard = () => {
//   return (
//     <div className="main-content">
//       <Sidebar />
      
//       <div className="card-container row">
//         <Link to="/terms" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 1" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4> General Knowledge</h4>
//           </div>
//         </Link>

//         {/* <Link to="/practice" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 2" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>English</h4>

//           </div>
//         </Link>

//         <Link to="/practice" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 3" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>Maths</h4>

//           </div>
//         </Link>

//         <Link to="/practice" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 4" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>All subject -Mock test-1</h4>
//           </div>
//         </Link> */}
//       </div>

//       {/* New Row of Cards */}


// {/* 
//       <div className="card-container row">
//         <Link to="/new-test" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 5" className="card-logo" />''
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>All subject -Mock test-1</h4>

//           </div>
//         </Link>

//         <Link to="/tutorials" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 6" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>All subject -Mock test-1</h4>
//           </div>
//         </Link>

//         <Link to="/reports" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 7" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>All subject -Mock test-1</h4>
//           </div>
//         </Link>

//         <Link to="/settings" className="card">
//           <div className="card-content">
//             <img src={logo} alt="Logo 8" className="card-logo" />
//             <h3>SSC CGL (Tier I & Tier II) Mock Test 2024</h3>
//             <h4>All subject -Mock test-1</h4>
//           </div>
//         </Link>
//       </div> */}


//     </div>
//   );
// };

// export default Dashboard;





// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";
// import "./Dashboard.css";
// import logo from "../assets/logo.png"; // Default fallback logo
// import cardvaluejson from "../json/examname.json"

// const Dashboard = () => {
//   const [muthu, setMuthu] = useState({
   
//   }); // Initial static value


// const[carddetails]= useState(cardvaluejson) 


// console.log(carddetails)


//   // Fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/mock-test"); // Replace with your API endpoint
//         if (response.data) {
//           setMuthu(response.data); // Assuming the response contains the fields: title, subject, and logo
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="main-content">
//       <Sidebar />
//       <div className="card-container row">
//         <Link to="/terms" className="card">
//           <div className="card-content">
//             <img src={carddetails.logo || logo} alt="Mock Test Logo" className="card-logo" />
//             <h3>{carddetails.title || "Default Title"}</h3>
//             <h4>{carddetails.subject || "Default Subject"}</h4>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";
// import "./Dashboard.css";
// import logo from "../assets/logo.png"; // Default fallback logo
// import cardvaluejson from "../json/examname.json";
// import cardlogo from "../assets/NEET.webp"

// const Dashboard = () => {
//   const [muthu, setMuthu] = useState({}); // Initial static value

//   // Load card details from JSON
//   const [carddetails] = useState(cardvaluejson);

//   // Log card details to verify
//   console.log("Card Details:", carddetails);

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/mock-test"); // Replace with your API endpoint
//         if (response.data) {
//           setMuthu(response.data); // Assuming the response contains the fields: title, subject, and logo
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="main-content">
//       <Sidebar />
//       <div className="card-container row">
//         {/* Render cards dynamically from JSON */}
//         {carddetails.map((card, index) => (
//           <Link to={card.link || "/mockTestinterface"} className="card" key={index}>
//             <div className="card-content">
//               <img src={cardlogo|| cardlogo} alt={`Card ${index + 1} Logo`} className="card-logo" />
//               <h3>{card.title || "Default Title"}</h3>
//               <h4>{card.subject || "Default Subject"}</h4>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
import logo from "../assets/logo.png"; // Default fallback logo
import cardvaluejson from "../json/examname.json";
import cardlogo from "../assets/NEET.webp";

const Dashboard = () => {
  const [muthu, setMuthu] = useState({}); // Initial static value

  // Load card details from JSON
  const [carddetails] = useState(cardvaluejson);

  // Log card details to verify
  console.log("Card Details:", carddetails);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/mock-test"); // Replace with your API endpoint
        if (response.data) {
          setMuthu(response.data); // Assuming the response contains the fields: title, subject, and logo
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <Sidebar />
      <div className="card-container row">
        {/* Render cards dynamically from JSON */}
        {carddetails.map((card, index) => (
          <Link to="/terms" className="card" key={index}> {/* Hardcoded link to /terms */}
            <div className="card-content">
              <img src={cardlogo || cardlogo} alt={`Card ${index + 1} Logo`} className="card-logo" />
              <h3>{card.title || "Default Title"}</h3>
              <h4>{card.subject || "Default Subject"}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
