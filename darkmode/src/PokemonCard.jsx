import React, { useState, useEffect } from "react";

import { fetchPokemonById } from "../src/utils/fetchPokemon"; // Import the function

const PokemonCard = ({ pokemonData }) => {
  const [pokemon, setPokemon] = useState(pokemonData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (loading) {
    return (
      <div className="container">
        <p className="mx-auto w-full max-w-[300px] md:w-1/2 lg:w-1/3">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p className="mx-auto w-full max-w-[300px] md:w-1/2 lg:w-1/3">
          {error}
        </p>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="container">
        <p className="mx-auto w-full max-w-[300px] md:w-1/2 lg:w-1/3">
          Please, provide a Pokemon valid search term
        </p>
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 capitalize dark:text-gray-100">
        {pokemon.name}
      </h2>
      <img
        className="mb-4 h-32 w-32"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="mb-2 text-gray-700 dark:text-gray-300">ID: {pokemon.id}</p>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        Types:
        {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        Height: {pokemon.height}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Weight: {pokemon.weight}
      </p>
    </div>
  );
};

export default PokemonCard;
