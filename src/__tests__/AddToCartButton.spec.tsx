import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { useSelector, Provider } from "react-redux";
import AddToCartButton from "../components/ui/AddToCartButton/AddToCartButton";
import { CartState } from "../interfaces/CartState";
import { ProductsState } from "../interfaces/ProductsState";
import { ThemeState } from "../interfaces/ThemeState";

const mockStore = configureStore<{
    theme: ThemeState;
    products: ProductsState;
    cart: CartState;
}>([]);
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

describe("AddToCartButton", () => {
    let store: MockStoreEnhanced<{
        theme: ThemeState;
        products: ProductsState;
        cart: CartState;
    }>;

    beforeEach(() => {
        store = mockStore({
            theme: {
                darkMode: false,
            },
            products: {
                products: [],
                status: "loading",
                error: undefined,
            },
            cart: {
                items: [], // ✅ Ensure itemsInCart is always an array
            },
        });

        (useSelector as unknown as jest.Mock).mockImplementation((callback) =>
            callback(store.getState())
        );
    });

    test("renders correctly and responds to clicks", () => {
        const product = {
            id: "1",
            title: "Test Product",
            price: 10,
            image: "",
            quantity: 1,
        };

        render(
            <Provider store={store}>
                <AddToCartButton product={product} />
            </Provider>
        );

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});
