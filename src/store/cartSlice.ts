import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../interfaces/CartState";

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const saveCartToStorage = (state: CartState) => {
    localStorage.setItem("cart", JSON.stringify(state.items));
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1,
                });
            }
            saveCartToStorage(state);
        },

        increaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveCartToStorage(state);
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveCartToStorage(state);
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload
            );
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
