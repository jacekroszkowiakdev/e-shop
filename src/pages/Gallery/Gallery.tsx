import "./Gallery.css";
import { useEffect, useState, useCallback, useRef } from "react";
import LazyImage from "../../components/LazyImage/LazyImage";
import Spinner from "../../components/Spinner/Spinner";

const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const generateImages = (count: number): string[] =>
    Array.from(
        { length: count },
        () =>
            `https://picsum.photos/400/600?blur=2&random=${getRandomInt(
                1,
                1000
            )}`
    );

const Gallery = () => {
    const [images, setImages] = useState<string[]>(generateImages(11));
    const [isLoading, setIsLoading] = useState(false);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const loadMoreImages = useCallback(() => {
        if (isLoading) return;
        setIsLoading(true);

        setTimeout(() => {
            setImages((prevImages) => [...prevImages, ...generateImages(11)]);
            setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isLoading) {
                loadMoreImages();
                console.log("Loading more images...");
            }
        }, observerOptions);

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [isLoading, loadMoreImages]);

    return (
        <div>
            <h1>Welcome to E-Shop</h1>
            <div className="image-board">
                {images.map((src, index) => (
                    <LazyImage
                        key={index}
                        src={src}
                        alt={`Product ${index + 1}`}
                    />
                ))}
            </div>

            {/* ✅ Intersection Observer Target */}
            <div ref={observerRef} className="loading-trigger">
                {isLoading ? <Spinner /> : null}
            </div>
        </div>
    );
};

export default Gallery;
