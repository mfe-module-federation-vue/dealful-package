export interface Product {
    name: string;
    quantity: number;
    unitPrice: number;
};

export interface Cart {
    products: Product[];
}
