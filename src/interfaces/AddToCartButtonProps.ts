import { CartItem } from "./CartState";
export interface AddToCartButtonProps {
    quantity?: number;
    onAdd?: () => void;

    product: CartItem;
}
