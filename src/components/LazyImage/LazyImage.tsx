import "./LazyImage.css";
import { useState, useEffect, useRef } from "react";
import { ImageProps } from "../../ts/interfaces/LazyImage";
import Spinner from "../Spinner/Spinner";

const LazyImage = ({
    src,
    alt = "Image",
    width = 400,
    height = 500,
}: ImageProps) => {
    const imgPlaceholder = "../../assets/e-shop.png";
    const [imageSrc, setImageSrc] = useState(imgPlaceholder);
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    setImageSrc(src);
                    setLoaded(true);
                    observer.unobserve(entry.target);
                };
                console.log(`Image ${src} is now visible`);
            }
        }, observerOptions);

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, [src]);

    return (
        <div className="lazy-image-container">
            {!loaded && <Spinner />}{" "}
            <img
                ref={imgRef}
                className="lazy-image"
                src={imageSrc}
                alt={alt}
                width={width}
                height={height}
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 1.2s ease-in-out",
                }}
            />
        </div>
    );
};

export default LazyImage;
