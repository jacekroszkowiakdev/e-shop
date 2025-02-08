import "./Main.css";
import { useEffect, useState } from "react";
import LazyImage from "../../components/LazyImage/LazyImage";

const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const MainPage = () => {
    const [images, setImages] = useState<string[]>([]);
    const loadImages = () =>
        `https://picsum.photos/400/600?blur=2&random=${getRandomInt(1, 150)}`;

    useEffect(() => {
        // Generate 30 random images on mount
        setImages(
            Array.from(
                { length: 30 },
                () =>
                    `https://picsum.photos/400/600?blur=2&random=${getRandomInt(
                        1,
                        150
                    )}`
            )
        );
    }, []);

    //TODO: implement array insert of another bath of images on scroll

    useEffect(() => {
        console.log("Updated Images:", images);
    }, [images]);

    return (
        <div>
            <h1>Welcome to E-Shop</h1>
            <div className="image-board">
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
                <LazyImage src={loadImages()} />
            </div>

            <div className="image-board">
                {images.map((src, index) => (
                    <LazyImage
                        key={index}
                        src={src}
                        alt={`Product ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
