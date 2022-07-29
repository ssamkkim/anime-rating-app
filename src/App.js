import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {

  //state
  const [animeData, setAnimeData] = useState([]);
  const [animeIndex, setAnimeIndex] = useState(0);
  const [animeRatings, setAnimeRatings] = useState([]);

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

  const displayAnime = () => {
    if(animeData[animeIndex] === undefined) {
      return (
        <h3>Loading...</h3>
      )
    } else if(animeIndex + 1 === animeData.length) {
      return (
        <h3>Finished!</h3>
      )
    }
      else {
      let currentAnime = animeData[animeIndex];
      let title = currentAnime.title;
      let anchorHref = currentAnime.url;
      let imgSrc = currentAnime.images.webp.image_url;
      let imgAlt = currentAnime.title + " image"; 
      return (
        <div>
          <p>{title}</p>
          <a href={anchorHref} target="_blank" rel="noreferrer"><img src={imgSrc} alt={imgAlt} className="anime-image" /></a>
        </div>
      ); 
    }
  }

  const handleNext = e => {
    animeIndex + 1 === animeData.length ? setAnimeIndex(animeIndex) : setAnimeIndex(animeIndex + 1);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!(animeIndex + 1 === animeData.length)) {
      const newRating = {
        title: animeData[animeIndex].title,
        rating: e.target.rating.value,
      }
      setAnimeRatings(animeRatings => [...animeRatings, newRating]);
      handleNext();
      displayAnime();
    }
  }


  return (
    <div id="app-container">
      <h2>Anime</h2>
      {/* <div id="anime-container">
        {animeData.map((n, i) => (
          <div key={i}>
            <p>{n.title}</p>
            <a href={n.url} target="_blank" rel="noreferrer"><img src={n.images.webp.image_url} alt={n.title + " image"} className="anime-image" /></a>
          </div>
        ))}
      </div> */}
      <div id="anime-container">
        {displayAnime()}
      </div>
      <form onSubmit={handleSubmit} style={{display: 'inline'}}>
        <select name="rating" id="rating">
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <input type="submit" />
      </form>
      <button onClick={handleNext}>Haven't Watched</button>
      {animeRatings.map((n, i) => (
        <div key={i}>
          {n.title + " " + n.rating}
        </div>
      ))}
    </div>
  );
};

export default App;
