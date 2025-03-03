import "./FavoriteButton.css";
import { useState, useEffect } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { FavoriteButtonProps } from "../../../interfaces/FavoriteButtonProps";

const FavoriteButton = ({
    initialLiked = false,
    onToggle,
    size = 24,
    color = "black",
    likedColor = "red",
}: FavoriteButtonProps) => {
    const [liked, setLiked] = useState(initialLiked);

    useEffect(() => {
        setLiked(initialLiked);
    }, [initialLiked]);

    const handleClick = () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        if (onToggle) onToggle(newLikedState);
    };

    return (
        <button
            className="fav-button"
            onClick={handleClick}
            data-testid="favorite-button"
        >
            {liked ? (
                <IoHeart
                    size={size}
                    color={likedColor}
                    data-testid="heart-filled"
                />
            ) : (
                <IoHeartOutline
                    size={size}
                    color={color}
                    data-testid="heart-outline"
                />
            )}
        </button>
    );
};

export default FavoriteButton;
