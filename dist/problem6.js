"use strict";
{
    function getMostExpensiveProduct(products) {
        if (products.length == 0) {
            return null;
        }
        else {
            let i;
            let mostExpensiveProduct = products[0];
            for (i = 1; i < products.length; i++) {
                if (products[i].price > mostExpensiveProduct.price) {
                    mostExpensiveProduct = products[i];
                }
            }
            return mostExpensiveProduct;
        }
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
    ];
    console.log(getMostExpensiveProduct(products)); // Output: { name: "Bag", price: 50 }
}
