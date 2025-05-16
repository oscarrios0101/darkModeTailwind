// utils/fetchPokemon.js

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonById = (id) => {
  // Assuming 'id' is a valid positive integer.
  // No explicit input validation for integer type is performed in this implementation.

  return fetch(`${BASE_URL}/pokemon/${id}`)
    .then((response) => {
      // Error Scope: API Response Handling (Successful Request, Unsuccessful Response)
      // This block checks if the API response indicates success (response.ok).
      if (!response.ok) {
        // If the response status is not OK (e.g., 404, 500), an error is thrown
        // indicating the problem with the API request for the specific ID.
        throw new Error(
          `Error fetching Pokemon with ID ${id}: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      // Error Scope: Network Errors or Issues During the Fetch Operation
      // This catch block handles errors that occur during the 'fetch' process itself.
      // These are typically related to network connectivity problems or issues
      // preventing the request from reaching the API or the response from being received.
      console.error(`Error fetching Pokemon with ID ${id}:`, error);
      throw new Error(`Error fetching Pokemon with ID ${id}: ${error.message}`);
    });
};

export const fetchPokemonByName = (name) => {
  // Assuming 'name' is a non-empty string.
  // No explicit input validation for string type or emptiness is performed in this implementation.

  const lowerCaseName = name.toLowerCase().trim();

  return fetch(`${BASE_URL}/pokemon/${lowerCaseName}`)
    .then((response) => {
      // Error Scope: API Response Handling (Successful Request, Unsuccessful Response)
      // This block checks if the API response indicates success (response.ok).
      if (!response.ok) {
        // If the response status is not OK (e.g., 404, 500), an error is thrown
        // indicating the problem with the API request for the specific name.
        throw new Error(
          `Error fetching Pokemon with name "${name}": ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      // Error Scope: Network Errors or Issues During the Fetch Operation
      // This catch block handles errors that occur during the 'fetch' process itself.
      // These are typically related to network connectivity problems or issues
      // preventing the request from reaching the API or the response from being received.
      console.error(`Error fetching Pokemon with name "${name}":`, error);
      throw new Error(
        `Error fetching Pokemon with name "${name}": ${error.message}`
      );
    });
};
