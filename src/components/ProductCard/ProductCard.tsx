import "./ProductCard.css";
import { Product } from "../../ts/types/Product";
import LikeButton from "../LikeButton/LikeButton";

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
                    <span className="product-price">${price.toFixed(2)}</span>
                    {/* <button className="add-to-cart">Add to Cart</button> */}
                    <LikeButton />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
