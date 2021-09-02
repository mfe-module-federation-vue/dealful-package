import { EVENT_KEYS } from "../keys/events";
import { Cart, Product } from "@/model/Cart";
import { STORAGE_KEYS } from "../keys/storage";
import { cartEmitter } from "./nanoevents";

export const cart = (): Cart => {
    const cartData = localStorage.getItem(STORAGE_KEYS.CART_DATA)
    try {
        return JSON.parse(cartData as string);
    } catch (error) {
        return { products: [] }
    }
};

export const setCart = (cart: Cart) => {
    localStorage.setItem(STORAGE_KEYS.CART_DATA, JSON.stringify(cart))
    cartEmitter.emit(EVENT_KEYS.CART, () => cart)
};

export const addToCart = (product: Product) => {
    let cartData: Cart
    try {
        cartData = cart() || { products: [] }
        if (!cartData?.products) {
            cartData.products = []
        }
        cartData.products.push(product)
        setCart(cartData)
    }
    catch (err) {
        console.log(err)
    }

};
