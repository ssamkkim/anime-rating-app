import React from 'react';

import HighestRated from './HighestRated';
import SeasonalAnime from './SeasonalAnime';

const Sidebar = () => {
  return (
    <div className="w-80">
      <HighestRated />
      <SeasonalAnime />
    </div>
  );
};

export default Sidebar;
