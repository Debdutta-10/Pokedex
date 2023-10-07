// AppNavigator.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './appnavigator.css';
import SearchBar from './SearchBar';

export default function AppNavigator({ pokemonData, onSearch }) {
  return (
    <nav className="app-nav">
      <Link to="/" className="nav-link link-style">
        <h2>Pokedex</h2>
      </Link>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
