import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/navbar";
import {Home} from "./pages/home/index";
import {Auth} from "./pages/auth";

import "./App.css";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/rated" element={<h1>Rated</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
