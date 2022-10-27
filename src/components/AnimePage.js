import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Loading from './Loading'

const AnimePage = () => {
  const [animeData, setAnimeData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getAnimeData();
  }, [animeData])


  const getAnimeData = () => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => {
        setAnimeData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const animeAiringDate = () => {
    const airingText = animeData.airing ? 'Airing' : 'Aired';
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const fromDate = `${monthNames[animeData.aired.prop.from.month - 1]} ${animeData.aired.prop.from.day}, ${animeData.aired.prop.from.year}`;
    const toDate = animeData.airing ? '?' : `${monthNames[animeData.aired.prop.to.month -1]} ${animeData.aired.prop.to.day}, ${animeData.aired.prop.to.year}`;

    return (
      <p>{`${airingText}: ${fromDate} - ${toDate}`}</p>
    )
  }

  const displayAnimeInfo = () => {
    return (
      <div>
        <h1>{animeData.title}</h1>
        <img src={animeData.images.webp.image_url} alt={animeData.title} />
        <div>
          <h1>Information</h1>
          <p>{`Episodes: ${animeData.episodes}`}</p>
          <p>{`Status: ${animeData.status}`}</p>
          <p>{animeAiringDate()}</p>
          <p>{`Episode Duration: ${animeData.duration.substr(0,6)}.`}</p>
          <p>{`Animation Studio: ${animeData.studios[0].name}`}</p>
          <p>{animeData.demographics === undefined ? `Demographic: ${animeData.demographics[0].name}` : null}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      {animeData === undefined ? <Loading /> : displayAnimeInfo()}
    </>
  )
}

export default AnimePage