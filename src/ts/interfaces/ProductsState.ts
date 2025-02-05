import { Product } from "../types/Product.ts";
export interface ProductsState {
    products: Product[];
    status: "idle" | "loading" | "succeeded" | "failed";

    error: string | undefined;
}
