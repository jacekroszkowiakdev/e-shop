import "./AddToCartButton.css";
import { IoCartOutline } from "react-icons/io5";
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
        <div>
            {itemQuantity > 0}
            <button onClick={() => item && dispatch(decreaseQuantity(item.id))}>
                -
            </button>
            <button className="add-to-cart-button" onClick={handleClick}>
                <IoCartOutline />
                {itemQuantity}
            </button>
            <button onClick={() => item && dispatch(increaseQuantity(item.id))}>
                +
            </button>
        </div>
    );
};

export default AddToCartButton;
