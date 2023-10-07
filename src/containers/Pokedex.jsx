// Pokedex.js
import axios from 'axios'; // Add this import
import React, { useEffect, useState } from 'react';
import { IMAGE_API_URL, POKEMON_API_URL } from '../components/config';
import './pokedex.css';
import PokemonDetails from './PokemonDetails';
import { Link } from 'react-router-dom';
import AppNavigator from '../components/AppNavigator';

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(POKEMON_API_URL + '?limit=1000').then((Response) => {
      if (Response.status >= 200 && Response.status < 300) {
        const { results } = Response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + '.png',
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
        setFilteredPokemonData(newPokemonData);
      }
    });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter the Pokemon data based on the search query
    const filteredData = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemonData(filteredData);
  };

  return (
    <div>
      <AppNavigator pokemonData={pokemonData} onSearch={handleSearch} />
      <div className="pokemon-grid">
        {filteredPokemonData.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`} className="link-style" key={pokemon.id}>
            <div className="pokemon-card">
              <img src={pokemon.url} alt={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} />
              <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
