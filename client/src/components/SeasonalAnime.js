import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

const SeasonalAnime = () => {
  const [seasonalAnimeList, setSeasonalAnimeList] = useState([]);

  let pageNum = 1;
  const url = `https://api.jikan.moe/v4/seasons/now?page=${pageNum}`;

  useEffect(() => {
    getSeasonalAnime();
  }, [seasonalAnimeList]);

  const getSeasonalAnime = () => {
    axios
      .get(url)
      .then((response) => {
        setSeasonalAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displaySeasonalAnime = () => {
    let tempSeasonalAnimeList = seasonalAnimeList.slice(0, 5);

    return (
      <div className="flex flex-row mx-4 my-2">
        {tempSeasonalAnimeList.map((anime) => (
          <div className="p-2" key={anime.mal_id}>
            <img
              className="rounded-lg aspect-auto"
              src={anime.images.webp.image_url}
              alt={anime.title}
            />
            <Link to={`/anime/${anime.mal_id}`}>
              <h2 className="break-words">{anime.title}</h2>
              <h3>{anime.score}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>CURRENT ANIMES</h1>
      {seasonalAnimeList[0] === undefined ? (
        <Loading />
      ) : (
        displaySeasonalAnime()
      )}
    </div>
  );
};

export default SeasonalAnime;
