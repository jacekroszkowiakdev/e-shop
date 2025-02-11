import "./ProductModal.css";
import { Product } from "../../ts/types/Product";

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(evt) => evt.stopPropagation()}
            >
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <img
                    src={product.image}
                    alt={product.title}
                    className="modal-image"
                />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span className="modal-price">${product.price.toFixed(2)}</span>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductModal;
