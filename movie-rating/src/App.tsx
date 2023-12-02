import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/navbar";
import {Home} from "./pages/home";
import {Auth} from "./pages/auth";
import {Movie} from "./pages/movie";
import {TvShow} from "./pages/tvshow";
import {Rated} from "./pages/rated/index";

import "./App.css";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/rated" element={<Rated />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/tvshow/:id" element={<TvShow />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
