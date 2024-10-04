// Importing essential Material UI components and styles
import { CssBaseline, Container } from "@mui/material";
import "./App.css"; // Importing custom CSS for additional styling

// Importing custom components: Header, Footer, and RandomNumberGenerator
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Box from "@mui/material/Box";
import RandomNumberGenerator from "./components/RandomNumberGenerator/RandomNumberGenerator";

function App() {
  return (
    <>
      {/* CssBaseline provides a consistent baseline for CSS, applying Material UI's global styles */}
      <CssBaseline />

      {/* Box component is used for layout, ensuring the app takes up the full height of the viewport */}
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Rendering the Header component */}
        <Header />

        {/* Main content area for RandomNumberGenerator, styled to grow and fill available space */}
        <Box component="main" sx={{ flexGrow: 1, padding: 2 }}>
          <RandomNumberGenerator />
        </Box>

        {/* Rendering the Footer component */}
        <Footer />
      </Box>
    </>
  );
}

export default App;
