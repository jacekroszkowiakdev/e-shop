import { ProductCardProps } from "./ProductCardProps";
export interface ProductModalProps {
    product: ProductCardProps | null;
    onClose: () => void;
}
