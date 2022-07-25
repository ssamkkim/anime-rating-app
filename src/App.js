import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  //state
  const [animeData, setAnimeData] = useState([]);
  //fetch animeData
  const fetchAnimeData = () => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(result => result.json())
      .then(data => setAnimeData(data.data))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchAnimeData();
  }, []);
  return (
    <div>
      <h2>Anime</h2>
      <div id="anime-container">
        {animeData.map((n, i) => (
          <div key={i}>
            <p>{n.title}</p>
            <img src={n.images.webp.image_url} alt={n.title + " image"} className="anime-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
