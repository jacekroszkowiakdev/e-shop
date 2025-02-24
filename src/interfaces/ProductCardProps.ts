export type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    onClick: () => void;
    quantity: number;
};
