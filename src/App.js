import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MockTestSelection from "./pages/MockTestSelection";
import MockTestInterface from "./pages/MockTestinterface";
import Practice from "./pages/Practice";
import Layout from "./components/Layout";
import TermsAndConditions from "./pages/Termandconditionpage";
import Results from "./pages/Result";
import Signup from "./pages/Signup";
import Otp from "./pages/otp";
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mock-tests" element={<MockTestSelection />} />
        <Route path="/mockTestinterface" element={<MockTestInterface />} />
        <Route path="/practice" element={<Practice/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/UserDetails" element={<UserDetails/>} />
        <Route path="/MockTestSelection" element={<MockTestSelection/>} />

        <Route
          path="/mock-tests"
          element={
            <Layout>
              <MockTestSelection/>
            </Layout>
          }
        />
<Route
          path="/practice"
          element={
            <Layout>
              <Practice/>
            </Layout>
          }
        />
<Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard/>
            </Layout>
          }
        />


<Route
          path="/mockTestinterface"
          element={
            <Layout>
            <MockTestInterface/>
            </Layout>
          }
        />



<Route
          path="/MockTestSelection"
          element={
            <Layout>
            <MockTestSelection/>
            </Layout>
          }
        />

      </Routes>

      
    </Router>


  );
}

export default App;
