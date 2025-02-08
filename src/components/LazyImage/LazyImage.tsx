import "./LazyImage.css";
import { useState, useEffect, useRef } from "react";
import { ImageProps } from "../../ts/interfaces/LazyImage";

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
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    setImageSrc(src);
                    setLoaded(true);
                };
                console.log(`Image ${src} is now visible`);
            }
        }, observerOptions);

        const currentImgRef = imgRef.current;

        if (currentImgRef) observer.observe(currentImgRef);

        return () => {
            if (currentImgRef) observer.unobserve(currentImgRef);
        };
    }, [src]);

    return (
        <img
            ref={imgRef}
            className="lazy-image"
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            style={{
                opacity: loaded ? 1 : 0.3,
                transition: "opacity 0.5s ease-in-out",
            }}
        />
    );
};
// TODO: implement placeholder image
// TODO: implement loading spinner
// TODO: code splitting: https://www.youtube.com/watch?v=JU6sl_yyZqs

export default LazyImage;
