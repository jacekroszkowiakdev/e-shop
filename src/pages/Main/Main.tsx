import "./Main.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/ProductModal/ProductModal";
import LiveSearch from "../../components/LiveSearch/LiveSearch";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../store/productsSlice";

const MainPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        } else if (status === "failed" && error) {
            console.error("Error fetching products", error);
        }
    }, [dispatch, products, status, error]);

    const [selectedProduct, setSelectedProduct] = useState<
        null | (typeof products)[0]
    >(null);

    return (
        <div>
            <h1>Welcome to E-Shop</h1>
            <LiveSearch />
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        onClick={() => setSelectedProduct(product)}
                        quantity={0}
                    />
                ))}
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default MainPage;
