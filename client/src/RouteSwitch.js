import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import App from './App';
import AnimePage from "./components/AnimePage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/anime/:id" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;