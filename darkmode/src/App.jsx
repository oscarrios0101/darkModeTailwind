import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Card from "./Card";
import Container from "./Container";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 ">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Container title="Card 1" children="some text" />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
