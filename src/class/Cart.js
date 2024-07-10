import Product from "./Product.js";

export default class Cart {
    constructor() {
        /**
         * @type {Product[]}
         */
        this.cart = new Array();
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

    /**
     * @param {Product} product
     * @param {number} amount
     */

    updateProductAmount(product, amount) {
        const index = this.cart.findIndex((p) => p._id === product._id);
        this.cart[index].amount = amount;
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

    /**
     * @returns {number}
     */

    getTotalAmount() {
        return this.cart.reduce((total, product) => total + product.amount, 0);
    }
}
