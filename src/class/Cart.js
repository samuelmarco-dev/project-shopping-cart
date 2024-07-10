import Product from "./Product.js";
import { menu } from "../utils/menu.js";

export default class Cart {
    constructor() {
        /**
         * @type {Product[]}
         */
        this.cart = new Array();
        this.tax = 0.17;
        this.paidOut = false;
    }

    showCart() {
        console.log("🎁 Items in Cart:");
        this.cart.forEach((product, index) => {
            console.log(
                `${index + 1}: ${product.name} - R$ ${product.price.toFixed(
                    2
                )} - Amount: ${product.amount} - Subtotal: R$ ${product
                    .getSubTotalPrice()
                    .toFixed(2)}`
            );
        });
        menu.separation();
        console.log(`💵 Total: R$ ${this.getTotalPrice().toFixed(2)}`);
        menu.separation();
    }

    /**
     * @param {number} index
     */

    findProduct(index) {
        return index >= 0 && index < this.cart.length ? this.cart[index] : false;
    }

    /**
     * @param {Product} product
     */

    addProduct(product) {
        this.cart.push(product);
    }

    /**
     * @param {Product} product
     */

    removeProduct(product) {
        this.cart = this.cart.filter((p) => p._id !== product._id);
    }

    removeAllProducts() {
        this.cart = [];
    }

    /**
     * @param {Product} product
     * @param {number} amount
     */

    updateProductAmount(product, amount) {
        const index = this.cart.findIndex((p) => p._id === product._id);

        if (!(index === -1) && amount >= 1) this.cart[index].amount = amount;
        else console.log('Unable to update quantity of this product');
    }

    updatePaidOut() {
        this.paidOut = true;
    }

    /**
     * @returns {Product[]}
     */

    getProducts() {
        return this.cart;
    }

    /**
     * @returns {number}
     */

    getTotalPrice() {
        return this.cart.reduce(
            (total, product) => total + product.getSubTotalPrice(),
            0
        );
    }

    getTotalPriceTax() {
        return this.getTotalPrice() * this.tax;
    }

    /**
     * @returns {number}
     */
    getPriceToPay() {
        return !this.paidOut
            ? this.getTotalPrice() + this.getTotalPriceTax()
            : 0;
    }

    /**
     * @returns {number}
     */

    getTotalAmount() {
        return this.cart.reduce((total, product) => total + product.amount, 0);
    }
}
