import "./ProductCard.css";
import { ProductCardProps } from "../../interfaces/ProductCardProps";
import FavoriteButton from "../ui/FavoriteButton/FavoriteButton";
import AddToCartButton from "../ui/AddToCartButton/AddToCartButton";

const ProductCard = ({
    price,
    title,
    description,
    image,
    onClick,
}: ProductCardProps) => {
    //TODO: add dark mode
    return (
        <div className="product-card" onClick={onClick}>
            <img src={image} alt={title} className="product-image" />
            <FavoriteButton size={45} color="gray" likedColor="red" />
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
                    <AddToCartButton
                        product={{
                            id: title,
                            price,
                            title,
                            image,
                            quantity: 1,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
