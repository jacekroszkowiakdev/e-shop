import "./App.css";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, lazy, Suspense } from "react";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DarkModeToggle from "./components/ui/DarkModeToggle/DarkModeToggle";
import Main from "./pages/Main/Main";
import Spinner from "./components/ui/Spinner/Spinner";

const LazyGallery = lazy(() => import("./pages/Gallery/Gallery"));

function App() {
    const cartCount = useSelector(
        (state: RootState) => state.cart.items.length
    );

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
                    {/* //TODO: create responsive Navbar component, add hamburger menu for small
                    screens */}
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <div className="cart-icon">
                        <IoCartOutline size={24} />
                        <span className="cart-count">{cartCount}</span>
                    </div>
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
