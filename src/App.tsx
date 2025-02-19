import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import Main from "./pages/Main/Main";
import Spinner from "./components/Spinner/Spinner";

const LazyGallery = lazy(() => import("./pages/Gallery/Gallery"));

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
                    {/* //TODO: make navar responsive, add hamburger menu for small
                    screens */}
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                </nav>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/gallery" element={<LazyGallery />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
