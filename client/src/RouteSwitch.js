import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import AnimePage from "./components/AnimePage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/anime/:id" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
