import axios, { AxiosError } from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../ts/types/Product";
import { ProductsState } from "../ts/interfaces/ProductsState";

const API_URL = import.meta.env.VITE_API_URL as string;
console.log("API URL:", API_URL); // ✅ Check if this prints the correct URL

const initialState: ProductsState = {
    products: [],
    status: "idle",
    error: undefined,
};

export const fetchProducts = createAsyncThunk<
    Product[],
    void,
    { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get<Product[]>(API_URL);

        return response.data;
    } catch (error) {
        const err = error as AxiosError<string>;
        return rejectWithValue(err.response?.data || "Something went wrong");
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.status = "succeeded";
                    state.products = action.payload;
                }
            )
            .addCase(
                fetchProducts.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.status = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default productsSlice.reducer;
