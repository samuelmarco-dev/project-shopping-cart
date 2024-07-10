import { v4 as uuidv4 } from "uuid";

const valueUnitary = 1;

export default class Product {
    constructor(name, price, description) {
        this._id = uuidv4();
        this.name = this.validateName(name);
        this.description = this.validateDescription(description);
        this.price = this.validatePrice(price);
        this.amount = valueUnitary;
    }

    validateName(name) {
        return typeof name === "string" && name.length > 0 ? name : "";
    }

    validatePrice(price) {
        return typeof price === "number" && price > 0 ? price : 0;
    }

    validateDescription(description) {
        return typeof description === "string" && description.length > 0
            ? description
            : "";
    }

    incrementAmount() {
        this.amount++;
    }

    decrementAmount() {
        this.amount > valueUnitary ? this.amount-- : false;
    }

    getSubTotalPrice() {
        return this.price * this.amount;
    }
}
