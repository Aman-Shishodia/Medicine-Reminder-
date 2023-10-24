import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reminderpage from "./Addreminder";
import Navbar from "./Navbar";
import Allreminder from "./Allreminder";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Allreminder />} />
      <Route path="/addreminder" element={<Reminderpage />} />
    </Routes>
    </>
  );
};

export default App;
