
const customerCart = [
    { unit_price: 16, quantity: 2 },
    { unit_price: 51, quantity: 3 },
    { unit_price: 1200, quantity: 1 },
    { unit_price: 120, quantity: 2 },
    { unit_price: 10, quantity: 15 },
];

let calcu_Cart_Price = (cart) => {

    let totalCost = 0
    for (i = 0; i < cart.length; i++) {
        let itemcost = cart[i].unit_price * cart[i].quantity
        totalCost += itemcost

    }
    return totalCost

}
let result = calcu_Cart_Price(customerCart)
console.log(result);
