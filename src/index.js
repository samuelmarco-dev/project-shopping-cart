import Cart from "./class/Cart.js";
import Product from "./class/Product.js";

const userCart = new Cart();
const eletronicProducts = {
    product1: new Product("Apple iPhone 15", 6000, 'Black 256GB 6.1"'),
    product2: new Product("Samsung Galaxy S24", 5200, 'Gray 256GB 6.2"'),
    product3: new Product("Xiaomi Poco X6", 4000, 'White 256GB 6.6"'),
};

// Populating user cart
for (const product in eletronicProducts) {
    userCart.addProduct(eletronicProducts[product]);
}

console.log(userCart);
