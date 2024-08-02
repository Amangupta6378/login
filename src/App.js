import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login"; // Assuming you have a Login component
import Success from "./components/Success";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default App;
