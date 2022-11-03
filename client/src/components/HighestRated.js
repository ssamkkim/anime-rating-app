import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';

const HighestRated = () => {
  const [highestRatedAnimeList, setHighestRatedAnimeList] = useState([]);

  const url = `https://api.jikan.moe/v4/top/anime?limit=3}`;

  useEffect(() => {
    getHighestRatedAnime();
  }, []);

  const getHighestRatedAnime = () => {
    axios
      .get(url)
      .then((response) => {
        setHighestRatedAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayHighestRatedAnime = () => {
    return (
      <div className="flex flex-col mx-4 my-2">
        {highestRatedAnimeList.map((anime) => (
          <div
            className="p-2 text-white hover:text-blue-400"
            key={anime.mal_id}
          >
            <Link className="flex h-[70px]" to={`/anime/${anime.mal_id}`}>
              <img
                className="mr-3 rounded-lg w-[50px] inline-block hover:brightness-110 hover:opacity-85"
                src={anime.images.webp.image_url}
                alt={anime.title}
              />
              <div className="w-52 flex flex-col hover:underline">
                <h2 className="break-words">{anime.title}</h2>
                <h3 className="text-sm">⭐{anime.score}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between w-80 items-center">
        <h1 className="mx-4 text-white text-lg font-bold">Highest Rated</h1>
        <Link className="mx-4 text-blue-400 hover:text-blue-500 hover:underline text-md">
          See All
        </Link>
      </div>
      {highestRatedAnimeList[0] === undefined ? (
        <Loading />
      ) : (
        displayHighestRatedAnime()
      )}
    </div>
  );
};

export default HighestRated;
