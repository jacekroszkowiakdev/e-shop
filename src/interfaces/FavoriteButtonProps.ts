export interface FavoriteButtonProps {
    initialLiked?: boolean;
    onToggle?: (liked: boolean) => void;
    size?: number;
    color?: string;
    likedColor?: string;
}
