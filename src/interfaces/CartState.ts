export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}
