import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIdex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";
import AlbumSearch from "./pages/AlbumSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<AlbumLayout />}>
            <Route index element={<AlbumIdex />}></Route>
            <Route path=":id" element={<AlbumPhoto />}></Route>
            <Route path="search" element={<AlbumSearch />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
