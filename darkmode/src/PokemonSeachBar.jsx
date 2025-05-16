//in this component i will introduce the search type, id and name for pokemon search
import React, { useState } from "react";
import { fetchPokemonById, fetchPokemonByName } from "./utils/fetchPokemon";

function PokemonSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearch = () => {
    if (searchType === "name") {
      console.log("pokemon search by name:", searchTerm);
      fetchPokemonByName(searchTerm)
        .then((data) => {
          setPokemonData(data);

          console.log("pokemon data:", data);
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching Pokemon by name:", err);
          setError(err.message || "Something went wrong");
          setPokemonData(null);
        });
    } else if (searchType === "id") {
      console.log("pokemon search by id:", searchTerm);
      fetchPokemonById(searchTerm)
        .then((data) => {
          setPokemonData(data);
          console.log("pokemon data:", data);
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching Pokemon by ID:", err);
          setError(err.message || "Something went wrong");
          setPokemonData(null);
        });
    }
  };

  return (
    <div className="flex flex-col rounded-md p-4 dark:text-white">
      <div className="flex w-full justify-center border-b-1 border-gray-300 p-2">
        <label htmlFor="search-input">Search Pokemon:</label>
        <input
          className="ml-2"
          type="text"
          id="search-input"
          placeholder={`Search by ${searchType === "name" ? "name" : "ID"}`}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex w-full justify-center p-2">
        <div>
          <label htmlFor="search-by-name">
            <input
              type="radio"
              id="search-by-name"
              value="name"
              name="searchType"
              checked={searchType === "name"}
              onChange={handleSearchTypeChange}
            />
            Name
          </label>
          <label htmlFor="search-by-id" className="ml-4">
            <input
              type="radio"
              id="search-by-id"
              value="id"
              name="searchType"
              checked={searchType === "id"}
              onChange={handleSearchTypeChange}
            />
            ID
          </label>
        </div>
      </div>
      <button
        className="mt-4 self-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default PokemonSearchBar;
