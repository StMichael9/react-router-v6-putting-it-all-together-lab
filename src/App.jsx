import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList";
import DirectorForm from "./pages/DirectorForm";
import DirectorCard from "./pages/DirectorCard";
import MovieForm from "./pages/MovieForm";
import MovieCard from "./pages/MovieCard";

const App = () => {
  return (
    <>
      {/* define all routes here */}
      <BrowserRouter>
        <Routes>
          {/* Top level routes*/}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* DIRECTORS PARENT ROUTE */}
          <Route path="directors" element={<DirectorContainer />}>
            {/* NESTED UNDER /directors */}
            <Route index element={<DirectorList />} />
            <Route path="new" element={<DirectorForm />} />
            <Route path=":id" element={<DirectorCard />}>
              <Route path="movies">
                <Route path="new" element={<MovieForm />} />
                <Route path=":movieId" element={<MovieCard />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
