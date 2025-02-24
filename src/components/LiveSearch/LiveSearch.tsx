import "./LiveSearch.css";
import { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../store/productsSlice";
import Spinner from "../ui/Spinner/Spinner";

const LiveSearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector(
        (state: RootState) => state.products
    );

    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto focus on input on component mount
    useEffect(() => {
        inputRef.current?.focus();
    });

    // TODO: add error boundary component

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        } else if (status === "failed" && error) {
            console.error("Error fetching products", error);
        }
    }, [dispatch, products, status, error]);

    useEffect(() => {}, [products]);

    // Optimized filtering with `useMemo`
    const filteredProducts = useMemo(() => {
        return products.filter((product: { id: number; title: string }) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, products]);

    return (
        <div className="live-search">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(evt) => setQuery(evt.target.value)}
            />

            {status === "loading" && <Spinner />}
            {error && <p>{error}</p>}

            {query && (
                <ul>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        ))
                    ) : (
                        <li>No products found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default LiveSearch;
