import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-3 bg-black">
      <Link to="/" className="flex">
        <img src={logo} alt="myanimerating_logo" className="w-10 h-10 mr-2" />
        <h1 className="text-white font-bold text-2xl">MyAnimeRating</h1>
      </Link>
      <SearchBar />
      <a href="/auth/google">
        <buton className="text-white font-bold text-lg">
          Login With Google
        </buton>
      </a>
    </div>
  );
};

export default Navbar;
