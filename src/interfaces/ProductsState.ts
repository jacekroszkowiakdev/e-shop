import { ProductCardProps } from "./ProductCardProps.ts";
export interface ProductsState {
    products: ProductCardProps[];
    status: "idle" | "loading" | "succeeded" | "failed";

    error: string | undefined;
}
