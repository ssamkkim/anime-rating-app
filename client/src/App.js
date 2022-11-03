import React from 'react';

import Navbar from './components/Navbar';
import SeasonalAnime from './components/SeasonalAnime';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="mx-auto bg-black h-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
