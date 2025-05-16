import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";

import PokemonCard from "./PokemonCard";
import PokemonSearchBar from "./PokemonSeachBar";

function App() {
  const pokemonIdPlaceholder = "6"; // Define the variable

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <PokemonCard pokemonData={pokemonIdPlaceholder} />
          <PokemonSearchBar />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
