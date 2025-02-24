import "./AddToCartButton.css";
import { AddToCartButtonProps } from "../../../interfaces/AddToCartButtonProps";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
} from "../../../store/cartSlice";
import { RootState } from "../../../store/store";

const AddToCartButton = ({
    quantity = 0,
    onAdd,
    product,
}: AddToCartButtonProps): JSX.Element => {
    const dispatch = useDispatch();

    const itemsInCart = useSelector((state: RootState) => state.cart.items);

    const item = itemsInCart.find((item) => item.id === product.id);
    const itemQuantity = item ? item.quantity : 0;

    const handleClick = () => {
        dispatch(addToCart({ ...product, quantity }));
        if (onAdd) onAdd(); // Add UI response
    };

    return (
        <div className="add-to-cart">
            {itemQuantity > 0 && (
                <button
                    className="quantity-button"
                    onClick={() => item && dispatch(decreaseQuantity(item.id))}
                >
                    -
                </button>
            )}

            <button className="add-to-cart-button" onClick={handleClick}>
                {itemQuantity}
            </button>

            {itemQuantity > 0 && (
                <button
                    className="quantity-button"
                    onClick={() => item && dispatch(increaseQuantity(item.id))}
                >
                    +
                </button>
            )}
        </div>
    );
};

export default AddToCartButton;
