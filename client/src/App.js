import React from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="mx-auto bg-cover bg-black h-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
