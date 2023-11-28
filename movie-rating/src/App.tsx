import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/auth" element={<h1>Auth</h1>} />
                    <Route path="/rated" element={<h1>Rated</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
