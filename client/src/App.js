import React from 'react';

import Navbar from './components/Navbar';
import SeasonalAnime from './components/SeasonalAnime';

const App = () => {
  return (
    <div className="mx-auto bg-black h-screen">
      <Navbar />
      <SeasonalAnime />
    </div>
  );
};

export default App;
