import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${searchQuery}&order_by=popularity`
      )
      .then((response) => {
        setSearchList(
          response.data.data.filter((anime) => anime.score > 0).slice(0, 5)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${searchQuery}&order_by=popularity`
      )
      .then((response) => {
        setSearchList(
          response.data.data.filter((anime) => anime.score > 0).slice(0, 5)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displaySearchAnime = () => {
    return (
      <div className="text-white absolute top-14">
        {searchList.map((anime) => (
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
    <div className="flex">
      <form className="flex flex-col" onSubmit={handleSearch}>
        <input
          className="rounded-full bg-black outline outline-1 outline-gray-500 py-2 px-5 w-96 text-white focus:outline-blue-500"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {displaySearchAnime()}
      </form>
    </div>
  );
};

export default SearchBar;
