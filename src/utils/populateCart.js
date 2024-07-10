import Cart from "../class/Cart.js";
import eletronicProducts from "./eletronicProducts.js";

/**
 * @param {Cart} cart
 */

const populateCart = async (cart) => {
    for (const product in eletronicProducts) {
        cart.addProduct(eletronicProducts[product]);
    }
};

export default populateCart;
