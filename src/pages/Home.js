// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent } from "@mui/material";

// const Home = () => {
//   return (
//     <div>
//       {/* Header */}
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             TestBook
//           </Typography>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Sign Up</Button>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <div
//         style={{
//           backgroundColor: "#f5f5f5",
//           padding: "50px 20px",
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Welcome to TestBook
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Start your journey with Mock Tests, Practice, and more!
//         </Typography>
//         <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
//           Start Now
//         </Button>
//       </div>

//       {/* Dashboard Cards */}
//       <div style={{ padding: "20px" }}>
//         <Grid container spacing={3}>
//           {[
//             { title: "Mock Tests", description: "Attempt full-length tests for practice." },
//             { title: "Practice", description: "Practice questions by topic." },
//             { title: "Analytics", description: "Analyze your performance." },
//             { title: "Daily Quiz", description: "Challenge yourself daily." },
//           ].map((item, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{item.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {item.description}
//                   </Typography>
//                   <Button size="small" style={{ marginTop: "10px" }}>
//                     Explore
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Home;



// Home.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={handleLoginClick}>Login</button>
//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css"; // Import external CSS

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       {/* Platform Introduction */}
//       <section className="intro-section">
//         <h1>Welcome to Our Platform</h1>
//         <p>Your one-stop solution for [Problem the Platform Solves]. Discover the best way to [Key Benefit].</p>
//         <button className="cta-button" onClick={() => navigate("/register")}>
//           Get Started
//         </button>
//       </section>

//       {/* Key Features */}
//       <section className="features-section">
//         <h2>Key Features</h2>
//         <ul>
//           <li>Feature 1: [Brief Description]</li>
//           <li>Feature 2: [Brief Description]</li>
//           <li>Feature 3: [Brief Description]</li>
//           <li>Feature 4: [Brief Description]</li>
//         </ul>
//         <button className="cta-button" onClick={() => navigate("/features")}>
//           Explore Features
//         </button>
//       </section>

//       {/* Subscription Plans */}
//       <section className="plans-section">
//         <h2>Subscription Plans</h2>
//         <div className="plans">
//           <div className="plan">
//             <h3>Basic Plan</h3>
//             <p>$9.99/month</p>
//             <p>Includes [Basic Features]</p>
//             <button className="cta-button">Choose Plan</button>
//           </div>
//           <div className="plan">
//             <h3>Pro Plan</h3>
//             <p>$19.99/month</p>
//             <p>Includes [Pro Features]</p>
//             <button className="cta-button">Choose Plan</button>
//           </div>
//           <div className="plan">
//             <h3>Enterprise Plan</h3>
//             <p>Custom Pricing</p>
//             <p>Includes [Enterprise Features]</p>
//             <button className="cta-button">Contact Us</button>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="testimonials-section">
//         <h2>What Our Users Say</h2>
//         <div className="testimonials">
//           <blockquote>
//             "This platform changed the way I work. Highly recommended!" - User A
//           </blockquote>
//           <blockquote>
//             "The features are amazing and the support is top-notch." - User B
//           </blockquote>
//           <blockquote>
//             "Affordable and efficient. Perfect for my needs." - User C
//           </blockquote>
//         </div>
//       </section>

//       {/* Login/Register Options */}
//       <section className="auth-section">
//         <h2>Join Us Today</h2>
//         <button className="cta-button" onClick={() => navigate("/login")}>
//           Login
//         </button>
//         <button className="cta-button" onClick={() => navigate("/register")}>
//           Register
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Home;




// import React from "react";
// import "./Home.css";
// import Navbar from "../components/Navabar";

// const Home = () => {
//   return (
//     <div className="home-container">

//       < Navbar/>
//       <h1>Welcome to Our Platform</h1>
//       <p>Your one-stop solution for [Problem the Platform Solves].</p>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import "./Home.css";
import Navbar from "../components/Navabar";
import {
  School,
  Work,
  Speed,
  SignalCellularAlt, 
} from '@mui/icons-material'; 
import MCQ from "../assets/mcq.jpg"


const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className="home-container">

      <div className="content-container">
        <div className="image-container">
          <img src={MCQ} alt="Testbook Pass" />
        </div>

        <div className="side-content">
          <h1>Mock test Application</h1>
          <p>Get unlimited access to the most relevant Mock Tests
          on India's Structured Online Test series platform</p>

          <h3>What you get with Testbook Pass</h3>
          <div className="features">
            <div className="feature">

              <School /> 
              <p>All India Rank</p>
            </div>
            <div className="feature">
              <Work /> 
              <p>Latest Exam Patterns</p>
            </div>
            <div className="feature">
              <Speed /> 
              <p>In-depth Performance Analysis</p>
            </div>
            <div className="feature">
              <SignalCellularAlt /> 
              <p>Multi-lingual Mock Tests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your Home page content */}
    </div>
    </div>
  );
};

export default Home;