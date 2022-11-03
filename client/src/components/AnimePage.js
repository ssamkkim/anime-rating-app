import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from './Loading';
import Navbar from './Navbar';
import RatingModal from './RatingModal';

const AnimePage = () => {
  const [animeData, setAnimeData] = useState();
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAnimeData();
  }, [animeData]);

  const getAnimeData = () => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => {
        setAnimeData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const animeAiringDate = () => {
    const airingText = animeData.airing ? 'Airing' : 'Aired';
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const fromDate = `${monthNames[animeData.aired.prop.from.month - 1]} ${
      animeData.aired.prop.from.day
    }, ${animeData.aired.prop.from.year}`;
    const toDate = animeData.airing
      ? '?'
      : `${monthNames[animeData.aired.prop.to.month - 1]} ${
          animeData.aired.prop.to.day
        }, ${animeData.aired.prop.to.year}`;

    return <p>{`${airingText}: ${fromDate} - ${toDate}`}</p>;
  };

  const displayAnimeInfo = () => {
    return (
      <div className="flex flex-col items-center text-center text-white bg-black h-screen">
        <img src={animeData.images.webp.image_url} alt={animeData.title} />
        <h1 className="">{animeData.title}</h1>
        <RatingModal setReviews={setReviews} />
        <div className="">
          <h1 className=" bold">Information</h1>
          <p className="">{`Episodes: ${animeData.episodes}`}</p>
          <p className="">{`Status: ${animeData.status}`}</p>
          <p className="">{animeAiringDate()}</p>
          <p className="">{`Episode Duration: ${animeData.duration.substr(
            0,
            6
          )}.`}</p>
          <p className="">{`Animation Studio: ${animeData.studios[0].name}`}</p>
          <p className="">
            {animeData.demographics === undefined
              ? `Demographic: ${animeData.demographics[0].name}`
              : null}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      {animeData === undefined ? <Loading /> : displayAnimeInfo()}
    </>
  );
};

export default AnimePage;
