import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { POKEMON_API_URL } from '../components/config';
import { useParams } from 'react-router-dom';
import "./pokedetails.css"
import AppNavigator from '../components/AppNavigator';
export default function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(POKEMON_API_URL + '/' + id).then((Response) => {
            if (Response.status >= 200 && Response.status < 300) {
                console.log(Response.data);
                setPokemon(Response.data);
            }
        });
    }, [id]);

    return (
        <>
              <AppNavigator/>
            {pokemon ? (
                <div className='con1'>
                    <div className="con1-1">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                    </div>
                    <div className="con2">
                        <p><strong>Height: </strong> {pokemon.height}</p>
                        <p><strong>Weight: </strong>{pokemon.weight}</p>
                        <p><strong>Types: </strong>{pokemon.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')}</p>
                        <p><strong>Abilities: </strong>{pokemon.abilities.map((ability) => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) ).join(', ')}</p>
                    </div>

                    <h3>Attacks:</h3>
                    <div className="con3">
                        <ul>
                            {pokemon.moves.map((move, index) => (
                                <li key={index}>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>

    );
}
