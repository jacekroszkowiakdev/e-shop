import "./DarkModeToggle.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleDarkMode } from "../../redux/themeSlice";

const DarkModeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const buttonText = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";

    return (
        <button onClick={() => dispatch(toggleDarkMode())}>
            <label className="switch">
                <span>{buttonText}</span>
            </label>
        </button>
    );
};

export default DarkModeToggle;
