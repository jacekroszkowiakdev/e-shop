import "./ProductCard.css";
import { Product } from "../../ts/types/Product";
import FavoriteButton from "../ui/FavoriteButton/FavoriteButton";

const ProductCard = ({
    price,
    title,
    description,
    image,
    onClick,
}: Product) => {
    //TODO: add dark mode
    return (
        <div className="product-card" onClick={onClick}>
            <img src={image} alt={title} className="product-image" />
            <div className="product-details">
                <h3 className="product-title">{title}</h3>

                <p className="product-description">{description}</p>
                <div className="product-footer">
                    <span className="product-price">
                        Price:{" "}
                        <span className="product-price-amount">
                            {price.toFixed(2)} $
                        </span>
                    </span>
                    <FavoriteButton size={45} color="gray" likedColor="red" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
