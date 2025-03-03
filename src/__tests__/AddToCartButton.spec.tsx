import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import AddToCartButton from "../components/ui/AddToCartButton/AddToCartButton";
import { CartItem } from "../interfaces/CartState";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
} from "../store/cartSlice";
import { store } from "../store/store";

// Mock useDispatch to ensure actions are tracked correctly
vi.mock("react-redux", async () => {
    const actual = await import("react-redux");
    return {
        ...actual,
        useDispatch: vi.fn(() => store.dispatch),
    };
});

const mockProduct: CartItem = {
    id: "1",
    title: "Test Product",
    price: 100,
    image: "",
    quantity: 1,
};

describe("AddToCartButton Component", () => {
    it("renders the Add to Cart button", () => {
        render(
            <Provider store={store}>
                <AddToCartButton product={mockProduct} quantity={1} />
            </Provider>
        );

        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("dispatches addToCart action on button click", () => {
        const dispatchSpy = vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <AddToCartButton product={mockProduct} quantity={1} />
            </Provider>
        );

        const button = screen.getByTestId("add-to-cart-button");
        fireEvent.click(button);

        expect(dispatchSpy).toHaveBeenCalledWith(
            addToCart({ ...mockProduct, quantity: 1 })
        );

        dispatchSpy.mockRestore(); // Reset spy after test
    });

    it("renders increase and decrease buttons when item is in cart", () => {
        const dispatchSpy = vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <AddToCartButton product={mockProduct} quantity={1} />
            </Provider>
        );

        expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();

        dispatchSpy.mockRestore();
    });

    it("dispatches decreaseQuantity on - button click", () => {
        const dispatchSpy = vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <AddToCartButton product={mockProduct} quantity={1} />
            </Provider>
        );

        const decreaseButton = screen.getByRole("button", { name: "-" });
        fireEvent.click(decreaseButton);

        expect(dispatchSpy).toHaveBeenCalledWith(
            decreaseQuantity(mockProduct.id)
        );

        dispatchSpy.mockRestore();
    });

    it("dispatches increaseQuantity on + button click", () => {
        const dispatchSpy = vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <AddToCartButton product={mockProduct} quantity={1} />
            </Provider>
        );

        const increaseButton = screen.getByRole("button", { name: "+" });
        fireEvent.click(increaseButton);

        expect(dispatchSpy).toHaveBeenCalledWith(
            increaseQuantity(mockProduct.id)
        );

        dispatchSpy.mockRestore();
    });
});
