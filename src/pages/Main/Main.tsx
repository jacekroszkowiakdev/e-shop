import "./Main.css";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/ProductModal/ProductModal";
import LiveSearch from "../../components/LiveSearch/LiveSearch";

const fakeProducts = [
    {
        id: 1,
        image: "https://picsum.photos/200/300",
        title: "Stylish Jacket",
        description: "A comfortable and stylish jacket for all seasons.",
        price: 49.99,
        category: "Clothing",
        rating: 4.9,
        onClick: () => {},
    },
    {
        onClick: () => {},
        id: 2,
        image: "https://picsum.photos/200/300",
        title: "Running Shoes",
        description: "Lightweight running shoes with great comfort.",
        price: 79.99,
        category: "Footwear",
        rating: 4.5,
    },
    {
        id: 3,
        image: "https://picsum.photos/200/300",
        title: "Wireless Headphones",
        description: "High-quality sound with active noise cancellation.",
        price: 129.99,
        onClick: () => {},
    },
];

const MainPage = () => {
    const [selectedProduct, setSelectedProduct] = useState<
        null | (typeof fakeProducts)[0]
    >(null);

    return (
        <div>
            <h1>Welcome to E-Shop</h1>
            <LiveSearch />
            <div className="product-grid">
                {fakeProducts.map((product) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        onClick={() => setSelectedProduct(product)}
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
