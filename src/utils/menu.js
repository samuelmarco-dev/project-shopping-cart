import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const exit = () => {
    console.log("Thank you for shopping with us!");
    separation();
}

const inicialize = () => {
    console.log("🛒 Welcome to the your Shopee Cart!");
    separation();
};

const separation = () =>
    console.log(
        "======================================================================"
    );

const options = () => {
    console.log("📌 Stock options in cart:");
    console.log(`1: Remove product`);
    console.log(`2: Update product amount`);
    console.log(`3: Finish purchase`);
    console.log(`4: Exit`);
    separation();
};

/**
 * 
 * @param {string} input 
 * @returns {number}
 */

const productAction = (input) => {
    let productTo;

    do {
        productTo = parseInt(prompt(`Choose the product to ${input}: `));
    } while (!productTo);

    return productTo;
};

export const menu = {
    exit,
    inicialize,
    options,
    productAction,
    separation
};
