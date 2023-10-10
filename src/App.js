import Footer from "./components/Homepage/Footer";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Pages/Music/Music";
import MusicPlay from "./components/Pages/MusicPlay/MusicPlay";
import MissingPage from "./components/Pages/MissingPage/MissingPage";
import AboutPage from "./components/Pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/music" element= {<Music />} />
        <Route path="/music/:id" element= {<MusicPlay />} />
        <Route path="/about" element= {<AboutPage />} />
        <Route path="*" element= {<MissingPage />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
