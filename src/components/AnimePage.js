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

  const displayAnimeInfo = () => {
    return (
      <div>
        <h1>{animeData.title}</h1>
        <img src={animeData.images.webp.image_url} alt={animeData.title} />
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