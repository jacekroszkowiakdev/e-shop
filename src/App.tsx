import "./App.css";
import { useEffect } from "react";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    return (
        <div>
            <h1>Fake Shop</h1>
            <DarkModeToggle />
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
