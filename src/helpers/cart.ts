import { Cart, Product } from "@/model/Cart";
import { STORAGE_KEYS } from "../keys/storage";

export const cart = (): Cart => {
    const cartData = localStorage.getItem(STORAGE_KEYS.CART_DATA)

    try {
        return JSON.parse(cartData as string);
    } catch (error) {
        throw Error("cart data is empty");
    }
};

export const setCart = (cart: Cart) => {
    localStorage.setItem(STORAGE_KEYS.CART_DATA, JSON.stringify(cart))
};

export const addToCart = (product: Product) => {
    let cartData: Cart

    try {
        cartData = cart()
        if (!cartData?.products) {
            cartData.products = []
        }
        cartData.products.push(product)

        setCart(cartData)
    }
    catch (err) { }

};
