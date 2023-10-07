import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import PokemonDetails from './containers/PokemonDetails';
import AppNavigator from './components/AppNavigator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
