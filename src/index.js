import PromptSync from "prompt-sync";

import Cart from "./class/Cart.js";
import { menu } from "./utils/menu.js";
import populateCart from "./utils/populateCart.js";

const prompt = PromptSync({ sigint: true });

(async function main() {
    const userCart = new Cart();
    await populateCart(userCart);
    menu.inicialize();

    let optionMenu = 0;

    while (!userCart.paidOut) {
        userCart.showCart();
        menu.options();

        let optionMenu = parseInt(prompt("Choose an option: "));

        switch (optionMenu) {
            case 1:
                const productToRemove = menu.productAction("remove");
                const productFoundToRemove = userCart.findProduct(
                    productToRemove - 1
                );

                if (!productFoundToRemove) {
                    console.log("Product not found!");
                } else {
                    console.log("Product found!");
                    userCart.removeProduct(productFoundToRemove);
                    menu.separation();
                    userCart.showCart();
                }
                break;
            case 2:
                const productToUpdate = menu.productAction("update");
                const productFoundToUpdate = userCart.findProduct(
                    productToUpdate - 1
                );

                if (!productFoundToUpdate) {
                    console.log("Product not found!");
                } else {
                    const newAmount = parseInt(prompt("Set a new amount: "));
                    userCart.updateProductAmount(
                        productFoundToUpdate,
                        newAmount
                    );
                    menu.separation();
                    userCart.showCart();
                }

                break;
            case 3:
                userCart.updatePaidOut();
                if (!userCart.getPriceToPay()) userCart.removeAllProducts();
                userCart.showCart();
                break;
            case 4:
                console.log("You exited without completing the purchase.");
                menu.separation();
                process.exit(1);
                break;
            default:
                optionMenu = 0;
                break;
        }

        if (userCart.paidOut) {
            menu.exit();
            break;
        }
    }
})();
