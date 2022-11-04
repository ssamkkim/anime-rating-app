import React from 'react';

import HighestRated from './HighestRated';
import SeasonalAnime from './SeasonalAnime';

const Sidebar = () => {
  return (
    <div>
      <HighestRated />
      <SeasonalAnime />
    </div>
  );
};

export default Sidebar;
