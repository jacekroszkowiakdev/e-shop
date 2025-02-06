import "./App.css";
import { useEffect } from "react";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

function App() {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    return (
        <div>
            <h1>Fake Shop</h1>
            <DarkModeToggle />
        </div>
    );
}

export default App;
