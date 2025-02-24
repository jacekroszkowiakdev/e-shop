import { ProductCardProps } from "./Product.ts";
export interface ProductsState {
    products: ProductCardProps[];
    status: "idle" | "loading" | "succeeded" | "failed";

    error: string | undefined;
}
