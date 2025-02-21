import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { LikeButtonProps } from "../../ts/interfaces/LikeButton.props";

const LikeButton = ({
    initialLiked = false,
    onToggle,
    size = 24,
    color = "black",
    likedColor = "red",
}: LikeButtonProps) => {
    const [liked, setLiked] = useState(initialLiked);

    const handleClick = () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        if (onToggle) onToggle(newLikedState);
    };

    return (
        <button
            onClick={handleClick}
            style={{ background: "none", border: "none", cursor: "pointer" }}
        >
            {liked ? (
                <IoHeart size={size} color={likedColor} />
            ) : (
                <IoHeartOutline size={size} color={color} />
            )}
        </button>
    );
};

export default LikeButton;
