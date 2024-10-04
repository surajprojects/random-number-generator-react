import { CssBaseline, Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Box from "@mui/material/Box";
import RandomNumberGenerator from "./components/RandomNumberGenerator/RandomNumberGenerator";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, padding: 2 }}>
          <RandomNumberGenerator />
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default App
