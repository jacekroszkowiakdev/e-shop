import "./App.css";
import { useEffect } from "react";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import Gallery from "./pages/Gallery/Gallery";

function App() {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    return (
        <Router>
            <div className="app">
                <h1>Fake Shop</h1>
                <DarkModeToggle />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
